import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Button} from 'react-mdl';
import { Card, Accordion, Table, Form, Row, Col } from 'react-bootstrap';
import Subjects from './subjects';
import { Link } from 'react-router-dom';
import { api, uid } from './helpers.js';

class StudentProfile extends Component {
  constructor(props) {
    super(props);
    this.state={
      activeTab:0,
      tree: {},
     };
  }

componentDidMount(){
      api('get-chose-tree', (json) => {
      this.setState({
      tree: json.data
      })
    }, {id_student:uid()});

      api('get-tests', (json) => {
      this.setState({
      result: json.data,
      })
    }, {result:this.state.result});

  }

  select(){
    api('get-lessons', (json) => {
      this.setState({
        lessons: json.data
      })
    }, { subject: this.state.name });
  }

  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <div className="student-profile">
          <div className="student-profile-info">
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
            <Button ripple className="btn-studentProfile">Изменить</Button>
          </Form>
          </div>
          <div className="student-profile-score">
          <h4>Оценки</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Предмет</th>
                <th>Фамилия</th>
                <th>Тема</th>
                <th>Оценка</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>ReactJS</td>
              <td>Петров</td>
              <td>переменные</td>
              <td>2</td>
            </tr>
            </tbody>
          </Table>
          </div>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
          <Subjects />
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="student-profile-subjects">
        {/*<h4>Выберите предмет</h4>
        <select style={{width: "200px", height: "35px"}}>
          <option value="Java">Java</option>
          <option selected value="JavaScript">JavaScript</option>
          <option value="React">React</option>
        </select>
         <Button ripple className="btn-studentProfile">Выбрать</Button>*/}
         <Accordion>
          {Object.keys(this.state.tree).map((keyNameS, i) => (
            <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={keyNameS}>
                {this.state.tree[keyNameS].title}
              </Accordion.Toggle>
            </Card.Header>

           <Accordion.Collapse eventKey={keyNameS}>
             <Card.Body>
             <ul>
             {Object.keys(this.state.tree[keyNameS].lessons).map((keyNameL, j) => (
             <li key={keyNameL}><Link to={'/studentLessonPage?id=' + this.state.tree[keyNameS].lessons[keyNameL].id}>{this.state.tree[keyNameS].lessons[keyNameL].name}</Link></li>
           ))}</ul></Card.Body>
           </Accordion.Collapse>

          </Card>  ))}
         </Accordion>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="student-profile-test">

          <Accordion>
           {Object.keys(this.state.tree).map((keyNameS, i) => (
             <Card>
             <Card.Header>
               <Accordion.Toggle as={Button} variant="link" eventKey={keyNameS}>
                 {this.state.tree[keyNameS].title}
               </Accordion.Toggle>
             </Card.Header>

            <Accordion.Collapse eventKey={keyNameS}>
              <Card.Body>
              <ul>
              {Object.keys(this.state.tree[keyNameS].lessons).map((keyNameL, j) => (
              <li key={keyNameL}><Link to={'/studentTest?id=' + this.state.tree[keyNameS].lessons[keyNameL].id}>{this.state.tree[keyNameS].lessons[keyNameL].name}</Link></li>
            ))}</ul></Card.Body>
            </Accordion.Collapse>

           </Card>  ))}
          </Accordion>

        </div>
      )
    }
  }

  render () {
    return (
      <div className="studentProfile">
      <h2>Добро пожаловать Студент</h2>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Профиль</Tab>
          <Tab>Записаться</Tab>
          <Tab>Пройти курсы</Tab>
          <Tab>Пройти Тест</Tab>
        </Tabs>

        <section className="studentProfile-grid">
          {this.toggleCategories()}
        </section>
      </div>
    );
  }
}

export default StudentProfile;
