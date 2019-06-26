<?php
$rules = array(
	'name' => ['required'],
	'id' => ['required', 'number'],
);

$errors = chechRequest($rules);

if(!empty($errors)) {
	$response['errors'] = $errors;
} else {
	$response['data'] = db_update('subjects', $_REQUEST, 'id = '.$_REQUEST['id']);
}