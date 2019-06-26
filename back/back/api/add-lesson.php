<?php
$rules = array(
	'name' => ['required'],
	'id_subjects' => ['required', 'number', ['link', 'subjects', 'id']],
);
$errors = chechRequest($rules);
if(!empty($errors)) {
	$response['errors'] = $errors;
} else {
	$id = db_insert('lessons', $_REQUEST);
	if($id) {
		$response['data'] = $id;
	} else {
		$response['error'] = 'Ошибка добавления данных';
	}
}
