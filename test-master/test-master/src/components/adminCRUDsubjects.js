import React, { Component } from 'react';
import { Button } from 'react-mdl';
import { Table } from 'react-bootstrap';
import { api } from './helpers.js';

class AdminCRUDsubjects extends Component {

  constructor(props){
    super(props);
    this.state={
      act: 0,
      index: '',
      datas: [],
      items: [],
      isLoaded: false,
      name: ''
    }
     this.fSubmit = this.fSubmit.bind(this);
  }

  componentDidMount(){
    this.refs.subject.focus();
  }

  componentDidMount(){
    api('get-subjects', (json) => {
      this.setState({
        isLoaded: true,
        items: json.data
      })
    });
  }

  fSubmit(){
    console.log('try');
    this.refs.myForm.reset();
    this.refs.subject.focus();
    if(this.state.act==0){
      api('admin-add-subject', (json) => {

      }, {
        name: this.state.name,
      }, 'post');
    } else {
      api('admin-edit-subject', (json) => {
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
    this.refs.subject.focus();

    api('admin-delete-subject', (json) => {
      //success
    }, {
      id: i,
    }, 'post');
  }

  fEdit = (i,j) => {
     let data = this.state.datas[i];
     this.refs.subject.value = j;

     this.setState({
      act: 1,
      index: i
    });
    this.refs.subject.focus();

  }

  // fEdit = (i,j) => {
  //    let data = this.state.datas[i];
  //    this.refs.subject.value = j;
  //    this.setState({
  //     act: 1,
  //     index: i
  //   });
  //   this.refs.subject.focus();
  //
  //   api('admin-edit-subject', (json) => {
  //     //success
  //   }, {
  //     name: this.refs.subject.value,
  //     id:i
  //   }, 'post');
  //   alert(i);
  // }
  render() {
    let datas = this.state.datas;
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Ошибка</div>;
    } else {
    return (
      <div className="adminCRUDsubjects">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm" onSubmit="return false">
          <input type="text" ref="subject" placeholder="Предмет" className="formField"   onChange={(e) => { this.setState({ name: e.target.value}) }} />
          <Button ripple onClick={this.fSubmit.bind(this)} className="myButton black" >{
            this.state.act==1?"Сохранить":"Создать"
          }</Button>
        </form>
        <pre></pre>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Предмет</th>
            </tr>
          </thead>
          <tbody>
          {items.map((item,i,j) =>
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><Button accent onClick={()=>this.fRemove(item.id)} className="myListButton red">Удалить</Button></td>
              <td><Button primary onClick={()=>this.fEdit(item.id,item.name)} className="myListButton blue">Редактировать</Button></td>
            </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
  }
}


export default AdminCRUDsubjects;
