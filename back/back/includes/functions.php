<?php
function chechRequest($rules) {
	$result = [];
	foreach($rules as $f => $rs) {
	foreach($rs as $r) {
		$rule = is_array($r) ? $r[0] : $r;
		switch($rule) {
			case 'safe':
			  if(isset($_REQUEST[$f])) {
					$_REQUEST[$f] = trim(htmlspecialchars(strip_tags($_REQUEST[$f])));
				}
				break;
			case 'array':
				if(isset($_REQUEST[$f]) && !is_array($_REQUEST[$f])) {
					$result[] = [$f => 'Должно быть массивом'];
				}
				break;
			case 'unique':
				if(db_get_one($r[1], isset($_REQUEST[$f]) ? $_REQUEST[$f] : '', $r[2], $r[2])) {
					$result[] = [$f => 'Имеется запись с таким же значением поля'];
				}
				break;
			case 'link':
				if(isset($_REQUEST[$f]) && !db_get_one($r[1], $_REQUEST[$f], $r[2], $r[2])) {
					$result[] = [$f => 'Неверный элемент справочника'];
				}
				break;
			case 'regexp':
				if(!preg_match('/^'.$r[1].'$/iu', isset($_REQUEST[$f]) ? $_REQUEST[$f] : '')) {
					$result[] = [$f => 'Неверное значение'];
				}
				break;
			case 'number':
				if(isset($_REQUEST[$f]) && !is_numeric($_REQUEST[$f])) {
					$result[] = [$f => 'Должно быть числом'];
				}
				break;
			case 'required':
				if(empty($_REQUEST[$f])) {
					$result[] = [$f => 'Обязательно для заполнения'];
				}
				break;
		}
	} }
	return $result;
}

function hashPassword($string) {
	return md5(SECRET.$string.SECRET);
}
