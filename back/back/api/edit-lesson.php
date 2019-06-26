<?php
$rules = array(
	'name' => ['safe'],
	'id' => ['required', 'number'],
	'id_subjects' => ['safe', 'number', ['link', 'subjects', 'id']],
);

$errors = chechRequest($rules);

if(!empty($errors)) {
	$response['errors'] = $errors;
} else {
	$response['data'] = db_update('lessons', $_REQUEST, 'id = '.$_REQUEST['id']);
}
