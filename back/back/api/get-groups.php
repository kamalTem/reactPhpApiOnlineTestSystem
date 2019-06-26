<?php
$response['data'] = isset($_REQUEST['id']) ? db_get_one('groups', (int)$_REQUEST['id']) : db_get_all('groups');