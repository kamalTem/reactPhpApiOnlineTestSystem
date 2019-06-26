<?php
$rules = array(
	'id' => ['required', 'number'],
	'id_lesson' => ['required', 'number', ['link', 'lessons', 'id']],
	'true_answer' => ['required', 'number'],
	'question' => ['required'],
	'answers' => ['required', 'array'],
);

$errors = chechRequest($rules);

if(!empty($errors)) {
	$response['errors'] = $errors;
} else {
	$response['data'] = db_update('test_question', $_REQUEST, 'id = '.$_REQUEST['id']);
}