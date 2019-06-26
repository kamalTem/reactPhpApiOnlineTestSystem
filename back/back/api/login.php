<?php
if(AUTH) {
	$response['error'] = 'Вы уже авторизованы';
} else {
	$rules = array(
		'email' => ['required', ['regexp', '[a-zA-Z0-9\+\-_\.]+@[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}']],
		'password' => ['requried']
	);

	$errors = chechRequest($rules);

	if(!empty($errors)) {
		$response['errors'] = $errors;
	} else {
		$where = 'g.id = u.group_id AND email = "'.$_REQUEST['email'].'" '.
			'AND password = "'.hashPassword($_REQUEST['password']).'"';;
		$user = db_get_all('users u,groups g', $where, 'u.*,g.name as `group`');
		if($user) {
			$response['data'] = $user[0];
			$response['location'] = URL_ROOT;
			$_SESSION['user'] = $response['data'];
		} else {
			$response['error'] = 'Неверный логин или пароль';
		}
	}
}