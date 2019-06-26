<?php
if(!is_array($_REQUEST['answers'])) {
	$_REQUEST['answers'] = explode(',', $_REQUEST['answers']);
}

$rules = array(
	'id_lesson' => ['required', 'number', ['link', 'lessons', 'id']],
	'true_answer' => ['required', 'number'],
	'question' => ['required'],
	'answers' => ['required', 'array'],
);

$errors = chechRequest($rules);

if(!empty($errors)) {
	$response['errors'] = $errors;
} else {
	$id = db_insert('test_question', $_REQUEST);
	if($id) {
		$response['data'] = $id;
	} else {
		$response['error'] = 'Ошибка добавления данных';
	}
}
