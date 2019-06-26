import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Button} from 'react-mdl';
import { Card, Accordion, Table, Form, Row, Col } from 'react-bootstrap';
import Subjects from './subjects';
import AdminCRUDusers from './adminCRUDusers';
import AdminCRUDsubjects from './adminCRUDsubjects';
import PhoneTable from './phoneTable';
import { api } from './helpers.js';

class AdminProfile extends Component {
  constructor(props) {
    super(props);
    this.state={
      activeTab:0,
      items: [],
      isLoaded: false,
     };
  }

  componentDidMount() {
    api('get-messages', (json) => {
      this.setState({
        isLoaded: true,
        items: json.data
      })
    });
  }

  toggleCategories() {
    const { isLoaded, items } = this.state;
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
          <h4>Телефонные заявки</h4>
          < PhoneTable />
          </div>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="adminProfile-subjectsCreate">
        <h2>Создаём предметы</h2>
        < AdminCRUDsubjects />
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="adminProfile-usersCreate">
        <h2>Создаём юзеров</h2>
        < AdminCRUDusers />
        </div>
      )
    } else if(this.state.activeTab === 3) {
      if (!isLoaded) {
        return <div>Ошибка</div>;
      } else {
        return (
         <div className="adminProfile-messages">
         <select style={{width: "200px", height: "35px"}}>
           <option selected value="new">Новые</option>
           <option value="alreadyRead">Прочитанные</option>
         </select>
         <Button ripple className="btn-adminProfile-messages">Выбрать</Button>
         <Table striped bordered hover>
           <thead>
             <tr>
               <th>Имя</th>
               <th>Email</th>
               <th>Сообщение</th>
             </tr>
           </thead>
           <tbody>
           {items.map((item, i) =>
             <tr key={item.id}>
               <td>{item.name}</td>
               <td> {item.email}</td>
               <td> {item.message}</td>
             </tr>
             )}
           </tbody>
         </Table>
         </div>
        );
      }
    }
  }

  render () {
    return (
      <div className="studentProfile">
      <h2>Добро пожаловать Админ</h2>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Основное</Tab>
          <Tab>Предметы+-</Tab>
          <Tab>Юзеры+-</Tab>
          <Tab>Все сообщения</Tab>
        </Tabs>

        <section className="studentProfile-grid">
          {this.toggleCategories()}
        </section>
      </div>
    );
  }
}

export default AdminProfile;
