<?php
$rules = array(
	'id' => ['required', 'number'],
);

$errors = chechRequest($rules);

if(!empty($errors)) {
	$response['errors'] = $errors;
} else {
	$response['data'] = db_delete('test_question', $_REQUEST['id']);
}