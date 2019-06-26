<?php

if(!is_array($_REQUEST['answers'])) {
	$_REQUEST['answers'] = explode(',', $_REQUEST['answers']);
}
$rules = array(
	'id' => ['required', 'number', ['link', 'tests', 'id']],
	'answers' => ['required', 'array'],
);

$errors = chechRequest($rules);

if(!isset($_SESSION['test'])) {
	$response['error'] = 'Тест не был начат';
} else if(count($_SESSION['test']['questions']) != count($_REQUEST['answers'])) {
	$response['error'] = 'Число ответов не совпадает с числом вопросов теста';
} else if(!empty($errors)) {
	$response['errors'] = $errors;
} else {

	$test = db_get_one('tests', $_REQUEST['id'], '*', 'id', 'id_user = '.$_SESSION['user']['id']);

	if(!$test) {
		$response['error'] = 'Тест Вам не принадлежит';
	} if(!empty($test['date_end'])) {
		$response['error'] = 'Тест завершен';
		//unset($_SESSION['test']);
	} else {

		$correct = 0;
		foreach($_SESSION['test']['questions'] as $i => $question) {
			if(isset($_REQUEST['answers'][$i]) && $question['true_answer'] == $_REQUEST['answers'][$i]) {
				++$correct;
			}
		}

		$updated = db_update('tests', array(
			'date_end' => time(),
			'result' => $correct,
			'answers' => $_REQUEST['answers']
		), 'id = '.$_REQUEST['id']);

		if($updated) {
			$response['data'] = $correct;
			unset($_SESSION['test']);
		} else {
			$response['error'] = 'Неудалось закончить тестирование';
		}

	}
}
