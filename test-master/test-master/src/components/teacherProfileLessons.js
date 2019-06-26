import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Button } from 'react-mdl';
import { Card, Accordion, Table, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from './helpers.js';
import TextEditor from './textEditor';

class TeacherProfileLessons extends Component {

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

    }

    fSubmit = (e) =>{
      e.preventDefault();
      if(this.state.act==0){
        api('add-lesson', (json) => {
          }, {
            name: this.state.name,
            id_subjects: this.props.subject
          }, 'post');
        } else {
        api('edit-lesson', (json) => {
          //success
        }, {
          name: this.state.name,
          id: this.state.index
        }, 'post');
      }
    }

    fRemove = (i) => {
      let datas = this.state.datas;
      datas.splice(i,1);
      this.setState({
        datas: datas
      });
      this.refs.myForm.reset();
      this.refs.name.focus();

      api('delete-lesson', (json) => {
        //success
      }, {
        id: i,
      }, 'post');
    }

    fEdit = (i,j) => {
      let data = this.state.datas[i];
      // this.refs.subject.value = data.subject;
      this.setState({
        act: 1,
        index: i
      });
      this.refs.name.focus();
      api('edit-lesson', (json) => {
        //success
      }, {
        id: i,
        name: j,
      }, 'post');
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
          <form ref="myForm" className="myForm">
            <input type="text" ref="name" placeholder="Тема" className="formField"   onChange={(e) => { this.setState({ name: e.target.value}) }} />
            <Button ripple onClick={(e)=>this.fSubmit(e)} className="myButton black" >
            {
              this.state.act==1?"Сохранить":"Создать"
            }
            </Button>
          </form>
          <pre></pre>
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
                <td><Button accent onClick={()=>this.fRemove(item.id)} className="myListButton red">Удалить</Button></td>
                <td><Button primary onClick={()=>this.fEdit(item.id)} className="myListButton blue">Редактировать</Button></td>
              </tr>
              )}
            </tbody>
          </Table>
        </div>
      );
    }
    }
}

export default TeacherProfileLessons;
