import React, { Component } from 'react';
import { Textfield, Button } from 'react-mdl';
import { Link } from 'react-router-dom';
import { api } from './helpers.js';

class Registration extends Component {

    constructor(props) {
     super(props);
     this.state = {
       email: '',
       password: '',
       rpassword: '',
       name: '',
       lname: '',
       group_id: '3',
       phone:''
     };
    }

    createAccount() {
      if(this.state.password != this.state.rpassword) {
        alert('Пароли не совпдают');
        return;
      }
      api('register', (json) => {
        window.location.reload();
      }, {
        email: this.state.email,
        password: this.state.password ,
        first_name: this.state.name,
        last_name: this.state.lname,
        phone: this.state.phone,
        group_id: this.state.group_id
      }, 'post');

    }

    render() {
        return (
          <div className="registration">
            <div className="registration-left"></div>
            <div className="registration-right">
            <h3>Регистрация</h3>
              <div className="registration-right-fields">
              <select style={{width: "200px", height: "35px", "margin-bottom": "30px"}} className="sel" onChange={(e) => { this.setState({ group_id: e.target.value}) }}>
                <option selected value="3">Ученик</option>
                <option value="2">Преподаватель</option>
              </select>
              <p>Имя</p>
              <Textfield
                onChange={(e) => { this.setState({ name: e.target.value}) }}
                label="Игорь"
                value={this.name}
                style={{width: '400px'}}
              />
              <p>Фамилия</p>
              <Textfield
                onChange={(e) => { this.setState({ lname: e.target.value}) }}
                label="Петров"
                style={{width: '400px'}}
              />
              <p>Email</p>
              <Textfield
                onChange={(e) => { this.setState({ email: e.target.value}) }}
                label="superman@free.com"
                style={{width: '400px'}}
              />
              <p>Номер телефона</p>
              <Textfield
                onChange={(e) => { this.setState({ phone: e.target.value}) }}
                pattern="-?[0-9]*(\.[0-9]+)?"
                error="Input is not a number!"
                label="891432432"
                style={{width: '400px'}}
              />
              <p>Пароль</p>
              <Textfield
                onChange={(e) => { this.setState({ password: e.target.value}) }}
                label="******"
                style={{width: '400px'}}
              />
              <p>Повторите Пароль</p>
              <Textfield
                onChange={(e) => { this.setState({ rpassword: e.target.value}) }}
                label="******"
                style={{width: '400px'}}
              /><br />
              <Button onClick={this.createAccount.bind(this)} ripple>Зарегистрировать</Button>
              <Link to="/login">Уже зарегистрировался</Link>
              </div>
            </div>
          </div>
        );
    }
}
export default Registration;
