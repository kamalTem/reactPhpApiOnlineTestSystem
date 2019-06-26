<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, x-requested-with, Cookie');
session_start();

include __DIR__.'/includes/config.php';
include __DIR__.'/includes/functions.php';
include __DIR__.'/includes/functions_db.php';

global $db;
$db = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) or die('Can not connect to DB :(');
$db->query('SET NAMES '.DB_CHARSET);

define('ADMIN_GROUP_ID', 1);
define('TEACHER_GROUP_ID', 2);
define('STUDENT_GROUP_ID', 3);
define('TEST_QUESTION_COUNT', 10);

if(!empty($_REQUEST['_session'])) {
	$_SESSION = json_decode($_REQUEST['_session'], true);
		unset($_REQUEST['_session']);
}

if(!empty($_REQUEST['USER_ID'])) {
	$_SESSION['user'] = db_get_one('users', $_REQUEST['USER_ID']);
	unset($_REQUEST['USER_ID']);
}

define('ACTION', isset($_REQUEST['action']) ? $_REQUEST['action'] : '');
define('AUTH', !empty($_SESSION['user']));
define('AUTH_ADMIN', AUTH && $_SESSION['user']['group_id'] == ADMIN_GROUP_ID);

unset($_REQUEST['action']);

$guestMethods = ['register', 'logout', 'login', 'add-phone-applications'];

$response = array('status' => 404, 'data' => null);
$actionParts = explode('-', ACTION);

if((!in_array(ACTION, $guestMethods) && !AUTH) || ($actionParts[0] == 'admin' && !AUTH_ADMIN)) {
	$response = array('status' => 403, 'data' => null);
} else if(file_exists(__DIR__.'/api/'.ACTION.'.php')) {
	include __DIR__.'/api/'.ACTION.'.php';
}

if($response['data'] !== null) {
	$response['status'] = 0;
} else if(!empty($response['errors'])) {
	$response['status'] = 400;
} else if(!empty($response['error'])) {
	$response['status'] = 500;
} else if(!empty($response['location'])) {
	$response['status'] = 301;
}

$response['_session'] = !empty($_SESSION) ? $_SESSION : null;

echo json_encode($response, JSON_UNESCAPED_UNICODE);

$db->close();
