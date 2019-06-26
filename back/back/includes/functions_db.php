<?php
function get_tests_list($teacher = null, $student = null) {
	global $db;
	$sql = "SELECT t.*, l.name as lesson, u.email, u.first_name, u.last_name, s.name as subject
		FROM tests t
			JOIN lessons l ON l.id = t.id_lesson
			JOIN users u ON u.id = t.id_user
			JOIN subjects s ON s.id = l.id_subjects
		";
	$sql .= ' WHERE 1 ';
	if($teacher !== null) {
		$sql .= ' AND t.id_lesson IN (SELECT id_lesson FROM user_chose WHERE id_user = "'.((int)$teacher).'")';
	}
	if($student !== null) {
		$sql .= ' AND t.id_user = "'.((int)$student).'"';
	}
	$sql .= ' ORDER BY CASE WHEN t.date_end IS NULL THEN 0 ELSE 1 END, t.date_end DESC';
	$array = array();
	//echo $sql;
	$result = $db->query($sql);
	while ($r = $result->fetch_assoc()) {
		$array[] = $r;
	}
	return $array;
}

function get_subject_list_tree($teacher = null, $student = null) {
	global $db;
	$all_lessons = "SELECT l.*,s.name AS subject FROM lessons l JOIN subjects s ON l.id_subjects = s.id ";
	if($student !== null || $teacher !== null) {
		$all_lessons .= " JOIN user_chose uc ON uc.id_lesson = l.id AND uc.id_user = \"".((int)($teacher ? $teacher : $student))."\"";
	}
	$all_lessons .= " ORDER BY subject, l.name";
	$array = array();
	$result = $db->query($all_lessons);
//	echo $all_lessons;
	while ($r = $result->fetch_assoc()) {
		if(!isset($array[$r['id_subjects']])) {
			$array[$r['id_subjects']] = ['title' => $r['subject'], 'lessons' => array()];

		}
		if($student === null) {
			$r["users"] = array();
			$result2 = $db->query("SELECT u.* FROM users u JOIN user_chose s ON s.id_user = u.id where s.id_lesson=".$r["id"].
				($teacher !== null ? ' AND u.id != "'.((int)$teacher).'"' : ''));
			while ($r2 = $result2->fetch_assoc()) {
				$r["users"][] = $r2;
			}
		}
		$array[$r['id_subjects']]['lessons'][] = $r;
	}
	return $array;
}

function db_insert($table, $values, $keys = null) {
	global $db;
	$f = $v = [];
	foreach($values as $k => $d) {
		if($keys === null || in_array($k, $keys)) {
			$f[] = $k;
			$v[] = $db->real_escape_string(is_array($d) ? json_encode($d) : $d);
		}
	}
	$sql = 'INSERT INTO '.$table.' ('.implode(',', $f).') VALUES ("'.implode('","', $v).'")';
	//echo $sql;
	$db->query($sql);
	return $db->insert_id;
}

function db_update($table, $values, $where) {
	global $db;
	$f = [];
	foreach($values as $k => $d) {
		$f[] = '`'.$k.'` = "'.$db->real_escape_string(is_array($d) ? json_encode($d) : $d).'"';
	}
	$sql = 'UPDATE '.$table.' SET '.implode(',', $f).' WHERE '.$where;
	//echo $sql;
	$db->query($sql);
	return $db->affected_rows;
}

function db_get_all_query($table, $where = '', $what = '*', $order = '') {
	global $db;
	$result = array();
	$sql = 'SELECT '.$what.' FROM '.$table.' WHERE 1 '.(empty($where) ? '' : 'AND '.$where);
	//echo $sql;
	if($order != '') {
		$sql .= ' ORDER BY '.$order;
	}
	return $db->query($sql);
}

function db_get_all($table, $where = '', $what = '*', $order = '') {
	$data = db_get_all_query($table, $where, $what, $order);
	$result = array();
	while($r = $data->fetch_assoc()) {
		$result[] = $r;
	}
	return $result;
}

function db_get_one($table, $id, $what = '*', $key = 'id', $where = '') {
	global $db;
	$sql = 'SELECT '.$what.' FROM '.$table.' WHERE '.$key.' = "'.$id.'"'.(empty($where) ? '' : 'AND ('.$where.')');
	//echo $sql;
	$data = $db->query($sql);
	return $data->fetch_assoc();
}

function db_delete($table, $id, $key = 'id', $where = '') {
	global $db;
	$sql = 'DELETE FROM '.$table.' WHERE '.$key.' = "'.$id.'"'.(empty($where) ? '' : 'AND ('.$where.')');
	$db->query($sql);
	return $db->affected_rows;
}
