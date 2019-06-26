<?php
$rules = array(
	'id_lesson' => ['safe', 'number'],
	'id_user' => ['safe', 'number'],
);

$errors = chechRequest($rules);

if(!AUTH_ADMIN && $_SESSION['user']['id'] != $_REQUEST['id_user']) {
	$response['error'] = 'Доступ запрещен';
} else if(!empty($errors)) {
	$response['errors'] = $errors;
} else {
	$where = array();
	if(!empty($_REQUEST['id_lesson'])) {
		$where[] = 'id_lesson = "'.$_REQUEST['id_lesson'].'"';
	}
	if(!empty($_REQUEST['id_user'])) {
		$where[] = 'id_user = "'.$_REQUEST['id_user'].'"';
	}
	if(empty($where)) {
		$response['error'] = 'Недостаточно параметров';
	} else {
		$response['data'] = db_get_all('user_chose', implode(' AND ', $where));
	}
}