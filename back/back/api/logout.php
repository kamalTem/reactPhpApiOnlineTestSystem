<?php
if(AUTH) {
	unset($_SESSION['user']);
}

$response['status'] = 0;
