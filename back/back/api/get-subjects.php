<?php
$response['data'] = isset($_REQUEST['id']) ? db_get_one('subjects', (int)$_REQUEST['id']) : db_get_all('subjects');