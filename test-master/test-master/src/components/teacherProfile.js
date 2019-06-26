import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Button } from 'react-mdl';
import { Card, Accordion, Table, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api, uid } from './helpers.js';
import TeacherProfileLessons from './teacherProfileLessons';
import TeacherTestChoose from './teacherTestChoose';
import Theory from './theory';

class TeacherProfile extends Component {
  constructor(props) {
    super(props);
    this.state={
      activeTab:0,
      items: [],
      name: '',
      lessons: [],
      tree:[]
     };
  }

  componentDidMount(){
    api('get-subjects', (json) => {
      this.setState({
        isLoaded: true,
        items: json.data
      })
    });
    api('get-lessons', (json) => {
      this.setState({
        isLoaded: true,
        lessons: json.data
      })
    });
    api('get-chose-tree', (json) => {
      this.setState({
      tree: json.data
      })
    }, {id_teacher:uid()});
  }
  select(){
    api('get-lessons', (json) => {
      this.setState({
        lessons: json.data
      })
    }, { subject: this.state.name });
  }

  fSubmit(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value,
    });
  }

  render () {
    return (
      <div className="teacherProfile">
      <h2>Добро пожаловать Преподаватель</h2>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Профиль</Tab>
          <Tab>Студенты</Tab>
          <Tab>Тесты</Tab>
        </Tabs>
        <section className="teacherProfile-grid">
          {this.toggleCategories()}
        </section>
      </div>
    );
  }

 trows() {
   var r = [];
   for(const s in this.state.tree)
       for(const l in this.state.tree[s].lessons)
         for(const u in this.state.tree[s].lessons[l].users)
           console.log(s, l, u)
     return r;
 }

  toggleCategories() {
    const { items } = this.state;
    if(this.state.activeTab === 0) {
      return (
        <div className="teacher-profile">
          <div className="teacher-profile-info">
          <h4>Редактировать профиль</h4>
          <Form>
            <Row>
              <Col>
                <Form.Control placeholder="Имя" />
              </Col>
              <Col>
                <Form.Control placeholder="Фамилия" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control placeholder="Email" />
              </Col>
              <Col>
                <Form.Control placeholder="Пароль" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control placeholder="Телефон" />
              </Col>
              <Col>
                <Form.Control placeholder="Новый пароль" />
              </Col>
            </Row>
            <Button ripple className="btn-teacherProfile">Изменить</Button>
          </Form>
          </div>
          <div className="teacher-profile-subjects">
          <h4>Выберите предмет</h4>
          <select style={{width: "200px", height: "35px"}} className="sel" onChange={(e) => { this.setState({ name: e.target.value}) }}>
            {items.map((item,i) =>
            <option value={item.id} >{item.name}</option>)}
          </select>
          <Button ripple  onClick={this.select.bind(this)} className="myButton black" >Выбрать</Button>
          < TeacherProfileLessons subject={this.state.name} lessons={this.state.lessons} />
          </div>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="teacher-students">
        <h4>Тема:....</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Предмет</th>
              <th>Тема</th>
              <th>Почта</th>
              <th>Фамилия</th>
              <th>Оценка</th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(this.state.tree).map((keyNameS, i) => (
            Object.keys(this.state.tree[keyNameS].lessons).map((keyNameL, j) => (
              Object.keys(this.state.tree[keyNameS].lessons[keyNameL].users).map((keyNameU, m) => (
                  <tr>
                  <td>{this.state.tree[keyNameS].title}</td>
                  <td>{this.state.tree[keyNameS].lessons[keyNameL].name}</td>
                  <td>{this.state.tree[keyNameS].lessons[keyNameL].users[keyNameU].email}</td>
                  <td>{this.state.tree[keyNameS].lessons[keyNameL].users[keyNameU].name}</td>
                  </tr>
              ))
            ))
          ))}
          </tbody>
        </Table>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="teacherTests">
        <div className="teacherTests-test">
          <h4>Выберите предмет</h4>
          <select style={{width: "200px", height: "35px"}} className="sel" onChange={(e) => { this.setState({ name: e.target.value}) }}>
            {items.map((item,i) =>
            <option value={item.id} >{item.name}</option>)}
          </select>
          <Button ripple  onClick={this.select.bind(this)} className="myButton black" >Выбрать</Button>
          < TeacherTestChoose lessons={this.state.lessons} />
        </div>
        </div>
      )
    }
  }

}

export default TeacherProfile;
