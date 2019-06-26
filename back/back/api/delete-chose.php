<?php
$rules = array(
	'id_lesson' => ['required', 'number', ['link', 'lessons', 'id']],
	'id_user' => ['required', 'number', ['link', 'users', 'id']],
);

$errors = chechRequest($rules);

if(!AUTH_ADMIN && $_SESSION['user']['id'] != $_REQUEST['id_user']) {
	$response['error'] = 'Доступ запрещен';
} else if(!empty($errors)) {
	$response['errors'] = $errors;
} else {
	$response['data'] = db_delete('user_chose', $_REQUEST['id_user'], 'id_user', 'id_lesson = "'.$_REQUEST['id_lesson'].'"');
}