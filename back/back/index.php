<html>
	<head></head>
	<body>
		<script src="jquery.js"></script>
		<script>
		function callApi(action, data, type, success) {
			type = type || 'get';
			data = data || {};
			$.ajax({
				url: 'api.php?action=' + action,
				type: type, data: data,
					dataType: 'json', success: (r) => { if(success) success(r); }
			});
		}
		</script>
<!--success, (r)-->
		<div>
			<input type="button" value="Me" onclick="callApi('me')" />
			<input type="button" value="Register" onclick="callApi('register', { email: 'tet@tet.ru', password: 'test', 'first_name': 'aaaa', last_name: 'sdf', group_id: 1}, 'post')" />
			<input type="button" value="DeleteUser" onclick="callApi('admin-delete-user', { id: 38 }, 'post')" />
			<input type="button" value="AddUser" onclick="callApi('admin-add-user', { email: 'tet@tet.ru', password: 'test' }, 'post')" />
			<input type="button" value="GetUsers" onclick="callApi('get-users')" />
			<input type="button" value="GetUsers" onclick="callApi('get-phone-applications')" />
			<input type="button" value="GetUsers" onclick="callApi('get-messages')" />
			<input type="button" value="AddSubject" onclick="callApi('messages', { name: 'SubjAgain', email: 'lera@lera.com', message: 'dsadsdsad'}, 'post')" />
			<input type="button" value="AddPhone" onclick="callApi('admin-add-phone-applications', { name: 'SubjAgain', phone: '111'}, 'post')" />
			<input type="button" value="GetUser #1" onclick="callApi('get-users', {id: 1})" />
			<input type="button" value="GetUsers Group #2" onclick="callApi('get-users', {group_id: 2})" />
			<input type="button" value="Login" onclick="callApi('login', { email: 'tet@tet.ru', password: 'test' }, 'post')" />
			<input type="button" value="Logout" onclick="callApi('logout')" />
			<br />
			<input type="button" value="GetGroups" onclick="callApi('get-groups')" />
			<input type="button" value="GetGroup #1" onclick="callApi('get-groups', {id: 1})" />
			<br />
			<input type="button" value="GetSubjects" onclick="callApi('get-subjects')" />
			<input type="button" value="GetSubject #1" onclick="callApi('get-subjects', {id:1})" />
			<input type="button" value="AddSubject" onclick="callApi('admin-add-subject', { name: 'SubjAgain'}, 'post')" />
			<input type="button" value="EditSubject" onclick="callApi('admin-edit-subject', { id: 3, name: 'SubjAgainEdited'}, 'post')" />
			<input type="button" value="DeleteSubject" onclick="callApi('admin-delete-subject', { id: 4}, 'post')" />
			<br />
			<input type="button" value="GetLessons" onclick="callApi('get-lessons')" />
			<input type="button" value="GetLesson #1" onclick="callApi('get-lessons', {id:1})" />
			<input type="button" value="AddLesson" onclick="callApi('admin-add-lesson', { name: 'LessonAgain', id_subjects: 2 }, 'post')" />
			<input type="button" value="EditLesson" onclick="callApi('admin-edit-lesson', { id: 7, name: 'LessonAgainEdited', id_subjects: 1 }, 'post')" />
			<input type="button" value="DeleteLesson" onclick="callApi('admin-delete-lesson', { id: 6}, 'post')" />
			<br />
			<input type="button" value="AddChose" onclick="callApi('add-chose', { id_user: 18, id_lesson: 7 }, 'post')" />
			<input type="button" value="DeleteChose" onclick="callApi('delete-chose', { id_user: 18, id_lesson: 7 }, 'post')" />
			<input type="button" value="GetChoseByUser #18" onclick="callApi('get-chose', { id_user: 18 }, 'post')" />
			<input type="button" value="GetChose" onclick="callApi('get-chose', { id_user: 18, id_lesson: 7 }, 'post')" />
			<input type="button" value="GetChoseTree" onclick="callApi('get-chose-tree', {}, 'post')" />
			<input type="button" value="GetChoseTree Teacher #18" onclick="callApi('get-chose-tree', { id_teacher: 18 }, 'post')" />
			<input type="button" value="GetChoseTree Student #26" onclick="callApi('get-chose-tree', { id_student: 26 }, 'post')" />
			<br />
			<input type="button" value="AddQuestion" onclick="callApi('admin-add-question', { id_lesson: 1, true_answer: 1, question: 'Выбери 1', answers: ['Вараинт 1', 'Вараинт 2', 'Вараинт 3'] }, 'post')" />
			<input type="button" value="EditQuestion #2" onclick="callApi('admin-edit-question', { id: 2, id_lesson: 1, true_answer: 2, question: 'Выбери 2', answers: ['Вараинт 1', 'Вараинт 2', 'Вараинт 3'] }, 'post')" />
			<input type="button" value="DeleteQuestion #3" onclick="callApi('admin-delete-question', { id: 3 }, 'post')" />
			<input type="button" value="GetQuestions Lesson #1" onclick="callApi('get-questions', { id_lesson: 1 })" />
			<br />
			<input type="button" value="StartTest" onclick="callApi('start-test', { id_lesson: 1 }, 'post')" />
			<input type="button" value="StopTest" onclick="callApi('stop-test', { id: 8, answers: [1, 1, 1] }, 'post')" />
			<input type="button" value="GetTests" onclick="callApi('get-tests')" />
			<input type="button" value="GetTests Teacher #18" onclick="callApi('get-tests', { id_teacher: 18 })" />
			<input type="button" value="GetTests Student #26" onclick="callApi('get-tests', { id_student: 26 })" />
			<input type="button" value="phone" onclick="callApi('phone', { first_name: 'aaaa', phone: '111' }, 'post')" />
		</div>

		<textarea id="response" readonly style="margin-top:20px;width:100%;height:300px;resize:vertiel;"></textarea>

	</body>
</html>
