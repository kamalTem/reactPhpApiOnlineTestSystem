import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Button } from 'react-mdl';
import { Card, Accordion, Table, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from './helpers.js';


class StudentProfileLessons extends Component {

    constructor(props){
      super(props);console.log(props);
      this.state={
        act: 0,
        index: '',
        datas: [],
        items: props.lessons ? props.lessons: [],
        isLoaded: true,
        name: '',
        id_subjects: props.subject,
      }
    }


    componentDidMount(){
      api('get-lessons', (json) => {
        this.setState({
          isLoaded: true,
          items: json.data
        })
      });
    }

    render() {
      let datas = this.state.datas;
      const { isLoaded, items } = this.state;

      if (!isLoaded) {
        return <div>Ошибка</div>;
      } else {
      return (
        <div className="adminCRUDsubjects">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Темы Предмета</th>
              </tr>
            </thead>
            <tbody>
            {this.props.lessons.map((item,i,j) =>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td><Link to={'/textEditor?id=' + item.id }>{item.name}</Link></td>
              </tr>
              )}
            </tbody>
          </Table>
        </div>
      );
    }
    }
}

export default StudentProfileLessons;
