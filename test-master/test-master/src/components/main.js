import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './about';
import Subjects from './subjects';
import Contact from './contact';
import TextEditor from './textEditor';
import StudentProfile from './studentProfile';
import TeacherProfile from './teacherProfile';
import Registration from './registration';
import Login from './login';
import StudentLessonPage from './studentLessonPage';
import AdminProfile from './adminProfile';
import AdminCRUDusers from './adminCRUDusers';
import AdminCRUDsubjects from './adminCRUDsubjects';
import RecordModalNumbers from './recordModalNumbers';
import StudentTest from './studentTest';
import TeacherTestCreate from './teacherTestCreate';
import PhoneTable from './phoneTable';
import TeacherProfileLessons from './teacherProfileLessons';
import Theory from './theory';
import TeacherPageExample from './teacherPageExample';
import TeacherTestChoose from './teacherTestChoose';
import StudentProfileLessons from './studentProfileLessons';
import APIComponent from './api';

const Main = () => (
  <Switch>
    <Route exact path = "/" component = {LandingPage} />
    <Route path = "/about" component = {About} />
    <Route path = "/contact" component = {Contact} />
    <Route path = "/subjects" component = {Subjects} />
    <Route path = "/textEditor" component = {TextEditor} />
    <Route path = "/studentProfile" component = {StudentProfile} />
    <Route path = "/teacherProfile" component = {TeacherProfile} />
    <Route path = "/registration" component = {Registration} />
    <Route path = "/login" component = {Login} />
    <Route path = "/studentLessonPage" component = {StudentLessonPage} />
    <Route path = "/adminProfile" component = {AdminProfile} />
    <Route path = "/adminCRUDusers" component = {AdminCRUDusers} />
    <Route path = "/adminCRUDsubjects" component = {AdminCRUDsubjects} />
    <Route path = "/recordModalNumbers" component = {RecordModalNumbers} />
    <Route path = "/studentTest" component = {StudentTest} />
    <Route path = "/teacherTestCreate" component = {TeacherTestCreate} />
    <Route path = "/phoneTable" component = {PhoneTable} />
    <Route path = "/api" component = {APIComponent} />
    <Route path = "/teacherProfileLessons" component = {TeacherProfileLessons} />
    <Route path = "/theory" component = {Theory} />
    <Route path = "/teacherPageExample" component = {TeacherPageExample} />
    <Route path = "/teacherTestChoose" component = {TeacherTestChoose} />
    <Route path = "/studentProfileLessons" component = {StudentProfileLessons} />
  </Switch>
)

export default Main;
