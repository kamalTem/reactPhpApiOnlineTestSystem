import React, { Component } from 'react';
import { Textfield, Button } from 'react-mdl';
import { Link } from 'react-router-dom';
import { api } from './helpers.js';

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      items: [],
      isLoaded: false,
      email: '',
      password: ''
    }
     // this.fSubmit = this.fSubmit.bind(this);
  }

  fSubmit(){
    api('login', (json) => {
      if(json.data.group_id==1){
        window.location="/adminProfile";
      }else if (json.data.group_id==2){
        window.location="/teacherProfile";
      } else {
        window.location="/studentProfile";
      }
    }, {
      email: this.state.email,
      password: this.state.password,
    }, 'post');

  }

    render() {
        return (
          <div className="registration">
            <div className="registration-left"></div>
            <div className="registration-right">
              <h3>Войти</h3>
              <div className="registration-right-fields">
              <p>Email</p>
              <Textfield
                type="email"
                onChange={(e) => { this.setState({ email: e.target.value}) }}
                label="superman@free.com"
                style={{width: '400px'}}
                required
              />
              <p>Пароль</p>
              <Textfield
                type="text"
                onChange={(e) => { this.setState({ password: e.target.value}) }}
                label="******"
                style={{width: '400px'}}
                required
              />
              <br />
               <Button ripple onClick={(e)=>this.fSubmit(e)}>Войти</Button>
              <Link to="/registration">Создать аккаунт</Link>
              </div>
            </div>
          </div>
        );
    }
}
export default Login;
