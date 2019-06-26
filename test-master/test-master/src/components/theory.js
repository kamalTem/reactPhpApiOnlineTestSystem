import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Button } from 'react-mdl';
import { Card, Accordion, Table, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from './helpers.js';

class Theory extends Component {
  constructor(props) {
    super(props);
    this.state={
      activeTab:0,
      items: [],
      name: ''
     };
  }

  componentDidMount(){
    api('get-subjects', (json) => {
      this.setState({
        isLoaded: true,
        items: json.data
      })
    });
    api('login', (json) => {
    }, {
      name: 'JavaScript', group_id: 1
    }, 'post');
  }

  componentLessons(){
    api('get-lessons', (json) => {
      this.setState({
        isLoaded: true,
        items: json.data
      })
    });
    api('login', (json) => {
    }, {
      name: 'JavaScript', group_id: 1
    }, 'post');
  }

  fSubmit(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value,

    });

  }

  render () {
    return (
      <div className="teacherTests-test">
      <Accordion defaultActiveKey="0">
       <Card>
         <Card.Header>
           <Accordion.Toggle as={Button} variant="link" eventKey="0">
             JavaScript
           </Accordion.Toggle>
         </Card.Header>
         <Accordion.Collapse eventKey="0">
           <Card.Body><Link to="/teacherTestCreate">Основы</Link></Card.Body>
         </Accordion.Collapse>
         <Accordion.Collapse eventKey="0">
           <Card.Body><a href="#">DOM, работа со страницей</a></Card.Body>
         </Accordion.Collapse>
       </Card>
       <Card>
         <Card.Header>
           <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Java
           </Accordion.Toggle>
         </Card.Header>
         <Accordion.Collapse eventKey="1">
           <Card.Body>Основы</Card.Body>
         </Accordion.Collapse>
         <Accordion.Collapse eventKey="1">
           <Card.Body>ООП</Card.Body>
         </Accordion.Collapse>
       </Card>
     </Accordion>
      </div>
    );
  }
}

export default Theory;
