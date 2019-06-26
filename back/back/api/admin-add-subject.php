<?php
$rules = array(
	'name' => ['required'],
);

$errors = chechRequest($rules);

if(!empty($errors)) {
	$response['errors'] = $errors;
} else {
	$id = db_insert('subjects', $_REQUEST, array_keys($rules));
	if($id) {
		$response['data'] = $id;
	} else {
		$response['error'] = 'Ошибка добавления данных';
	}
}
