<?php
$rules = array(
	'id_teacher' => ['safe', 'number'],
	'id_student' => ['safe', 'number'],
);

$errors = chechRequest($rules);

if(!empty($_REQUEST['id_teacher']) && !empty($_REQUEST['id_student'])) {
	$response['error'] = 'Ошибка запроса';
} else if(!empty($errors)) {
	$response['errors'] = $errors;
} else {
	if(!AUTH_ADMIN) {
		if($_SESSION['user']['group_id'] == STUDENT_GROUP_ID) {
			if(empty($_REQUEST['id_student']) || $_SESSION['user']['id'] != $_REQUEST['id_student']) {
				$response['error'] = 'Учащийся может просматривать только свои тесты';
			}
		} else if($_SESSION['user']['group_id'] == TEACHER_GROUP_ID) {
			if(empty($_REQUEST['id_teacher']) || $_SESSION['user']['id'] != $_REQUEST['id_teacher']) {
				$response['error'] = 'Преподаватель может просматривать только свои тесты';
			}
		}
	}
		
	if(empty($response['error'])) {
		$response['data'] = get_tests_list(
								empty($_REQUEST['id_teacher']) ? null : $_REQUEST['id_teacher'], 
								empty($_REQUEST['id_student']) ? null : $_REQUEST['id_student']
							);
	}
}