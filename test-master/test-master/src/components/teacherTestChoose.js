import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Button } from 'react-mdl';
import { Card, Accordion, Table, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from './helpers.js';
import TextEditor from './textEditor';

class TeacherTestChoose extends Component {

    constructor(props){
      super(props);
      this.state={
        act: 0,
        index: '',
        datas: [],
        items: props.lessons ? props.lessons: [],
        isLoaded: true,
        name: '',
        id_subjects: '',
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
          <h2>{this.state.title}</h2>
          <pre></pre>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>id предмета</th>
                <th>Темы Предмета</th>
              </tr>
            </thead>
            <tbody>
            {this.props.lessons.map((item,i,j) =>
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.id_subjects}</td>
                <td><Link to={'/teacherTestCreate?id=' + item.id }>{item.name}</Link></td>
              </tr>
              )}
            </tbody>
          </Table>
        </div>
      );
    }
    }
}

export default TeacherTestChoose;
