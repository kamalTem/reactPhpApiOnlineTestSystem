<?php
$rules = array(
	'email' => ['required', ['regexp', '[a-zA-Z0-9\+\-_\.]+@[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}'], ['unique', 'users', 'email']],
	'first_name' => ['safe'],
	'last_name' => ['safe'],
	'group_id' => [['link', 'groups', 'id']],
	'password' => ['requried'],
	'phone' => ['requried']
);

$errors = chechRequest($rules);

if(!empty($errors)) {
	$response['errors'] = $errors;
} else {
	$_REQUEST['password'] = hashPassword($_REQUEST['password']);
	$id = db_insert('users', $_REQUEST, array_keys($rules));
	if($id) {
		$response['data'] = $id;
		$response['location'] = URL_ROOT;
	} else {
		$response['error'] = 'Ошибка регистрации';
	}
}
