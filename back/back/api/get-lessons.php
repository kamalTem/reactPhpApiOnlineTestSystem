<?php
$subject = !empty($_REQUEST['subject']) ? (int)$_REQUEST['subject'] : 0;
$response['data'] = isset($_REQUEST['id'])
	? db_get_one('lessons l,subjects s', (int)$_REQUEST['id'], 'l.*,s.name as subject', 'l.id', 's.id=l.id_subjects')
	: db_get_all('lessons l,subjects s', 's.id=l.id_subjects'.($subject ? ' AND s.id = '.$subject: ''), 'l.*,s.name as subject', 'subject, l.name');
