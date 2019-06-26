<?php
$rules = array(
	'id_lesson' => ['required', 'number'],
);

$errors = chechRequest($rules);

if(!empty($errors)) {
	$response['errors'] = $errors;
} else {
	$data = db_get_all_query('test_question q,lessons l,subjects s', 'q.id_lesson=l.id AND l.id_subjects=s.id', 'q.*,s.name as suject,l.name as lesson');
	$result = array();
	while($r = $data->fetch_assoc()) {
		$r['answers'] = json_decode($r['answers'], true);
		$result[] = $r;
	}
	$response['data'] = $result;
}