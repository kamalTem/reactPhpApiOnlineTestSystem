<?php
$response['data'] = isset($_REQUEST['id']) ? db_get_one('users', (int)$_REQUEST['id']) 
	: db_get_all('users', isset($_REQUEST['group_id']) ? 'group_id = "'.((int)$_REQUEST['group_id']).'"' : '');