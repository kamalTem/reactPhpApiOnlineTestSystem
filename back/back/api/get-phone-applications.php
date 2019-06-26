<?php
$response['data'] = isset($_REQUEST['id']) ? db_get_one('phone_applications', (int)$_REQUEST['id']) : db_get_all('phone_applications');
