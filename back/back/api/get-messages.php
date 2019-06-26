<?php
$response['data'] = isset($_REQUEST['id']) ? db_get_one('messages', (int)$_REQUEST['id']) : db_get_all('messages');
