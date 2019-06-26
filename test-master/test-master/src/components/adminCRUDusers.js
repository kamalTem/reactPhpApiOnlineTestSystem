import React, { Component } from 'react';
import { Button } from 'react-mdl';
import { Table } from 'react-bootstrap';
import { api } from './helpers.js';

class AdminCRUDusers extends Component {

  constructor(props){
    super(props);
    this.state={
      act: 0,
      index: '',
      datas: [],
      items: [],
      isLoaded: false,
      email: '',
      password: '',
      rpassword: '',
      name: '',
      lname: '',
      id_group: '',
      phone:'',
      id_lesson:0,
      lessons: []
    }
  }

  componentDidMount(){

    api('get-users', (json) => {
      this.setState({
        isLoaded: true,
        items: json.data
      })
    });
    api('get-lessons', (json) => {
      this.setState({
        lessons: json.data
      })
    });
  }

  fSubmit(){
    if(this.state.act==0){
      api('admin-add-user', (json) => {
        //success
        api('add-chose', (json) => {

        } ,{
          id_lesson:this.state.id_lesson,
          id_user:json.data
        },'post');
      }, {
        email: this.state.email,
        password: this.state.password ,
        first_name: this.state.name,
        last_name: this.state.lname,
        group_id: this.state.group_id,
        phone: this.state.phone
      }, 'post');
    }   else {
      api('admin-edit-user', (json) => {
        //success
      }, {
        email: this.state.email,
        password: this.state.password ,
        first_name: this.state.name,
        last_name: this.state.lname,
        group_id: this.state.group_id,
        phone: this.state.phone,
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
    this.refs.email.focus();
    api('admin-delete-user', (json) => {
      //success
    }, {
      id: i,
    }, 'post')
  }

  fEdit = (i,w,e,r,t,y) => {
    let data = this.state.datas[i];
    this.refs.group_id.value = i;
    this.refs.name.value = w;
    this.refs.lname.value = e;
    this.refs.email.value = r;
    this.refs.password.value = t;
    this.refs.phone.value = y;
    this.setState({
      act: 1,
      index: i
    });
    this.refs.email.focus();
  }

  render() {
    let datas = this.state.datas;
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Ошибка</div>;
    } else {
    return (
      <div className="adminCRUDusers">
        <h2>{this.state.title}</h2>

        <input type="text" ref="group_id" placeholder="Сущность" className="formField" onChange={(e) => { this.setState({ group_id: e.target.value}) }}/>
          <select style={{width: "200px", height: "35px","margin-right":"20px"}} className="sel" onChange={(e) => { this.setState({ id_lesson: e.target.value}) }}>
            {this.state.lessons.map((item,i) =>
            <option key={item.id} value={item.id} >{item.subject} - {item.name}</option>)}
          </select>
          <input type="text" ref="name" placeholder="Имя" className="formField" onChange={(e) => { this.setState({ name: e.target.value}) }}/>
          <input type="text" ref="lname" placeholder="Фамилия" className="formField" onChange={(e) => { this.setState({ lname: e.target.value}) }}/>
          <input type="text" ref="email" placeholder="Email" className="formField" onChange={(e) => { this.setState({ email: e.target.value}) }} /><br />
          <input type="text" ref="password" placeholder="Пароль" className="formField" onChange={(e) => { this.setState({ password: e.target.value}) }}/>
          <input type="text" ref="rpassword" placeholder="Повторите пароль" className="formField" onChange={(e) => { this.setState({ rpassword: e.target.value}) }}/>
          <input type="text" ref="phone" placeholder="Телефон" className="formField" onChange={(e) => { this.setState({ phone: e.target.value}) }}/>
          <Button ripple onClick={this.fSubmit.bind(this)} className="myButton black" >
          {
            this.state.act==1?"Сохранить":"Создать"
          }
          </Button>

        <pre>

        </pre>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#id</th>
              <th>Учен/Преп</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Предмет</th>
              <th>Email</th>
              <th>Пароль</th>
              <th>Телефон</th>
            </tr>
          </thead>
          <tbody>
          {items.map((item,lessons, i,w,e,r,t,y) =>
            <tr key={item.id}>
              <td>{item.id}</td>
              <th>{item.group_id}</th>
              <td>{item.first_name}</td>
              <td> {item.last_name}</td>
              <td>{lessons.id_lesson}</td>
              <td>{item.email}</td>
              <td> {item.password}</td>
              <td> {item.phone}</td>
              <td><Button accent onClick={()=>this.fRemove(item.id)} className="teacherTestCreateListButton red">Удалить</Button></td>
              {/* <td><Button primary onClick={()=>this.fEdit(item.group_id,item.first_name,item.last_name,item.email,item.password,item.phone)} className="teacherTestCreateListButton blue">Редактировать</Button></td>*/}
            </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
  }
}


export default AdminCRUDusers;
