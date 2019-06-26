<?php
$rules = array(
	'id_lesson' => ['required', 'number', ['link', 'lessons', 'id']],
);

$errors = chechRequest($rules);

if(isset($_SESSION['test'])) {
	$response['error'] = 'Прежде чем начать новое тестирование необходимо закончить предыдущий тест';
} else if(!empty($errors)) {
	$response['errors'] = $errors;
} else {

	$chose = db_get_one('user_chose', $_REQUEST['id_lesson'], '*', 'id_lesson', 'id_user = '.$_SESSION['user']['id']);

	if(!$chose) {
		$response['error'] = 'Прежде чем начать тестирование нужно подписаться на урок';
	} else {

		$data = db_get_all('test_question q,lessons l,subjects s', 'q.id_lesson=l.id AND l.id_subjects=s.id and l.id='.$_REQUEST['id_lesson'], 'q.*,s.name as suject,l.name as lesson');
		shuffle($data);
		$questions = array_splice($data, 0, TEST_QUESTION_COUNT);

		$test = array(
			'id_lesson' => $_REQUEST['id_lesson'],
			'id_user' => $_SESSION['user']['id'],
			'date_start' => time(),
			'questions' => array_map(function($e) {
				unset($e['true_answer']);
				return $e;
			}, $questions)
		);
		$id = db_insert('tests', $test);
		if($id) {
			$test['id'] = $id;
			$_SESSION['test'] = array('id' => $id, 'questions' => $questions);
			$response['data'] = $test;
		} else {
			$response['error'] = 'Неудалось начать тестирование';
		}
	}
}
