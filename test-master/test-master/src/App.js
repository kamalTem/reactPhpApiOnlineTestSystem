import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Card } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { api } from './components/helpers.js';

class App extends Component  {
  constructor(props){
    super(props);
    this.state={
      me:{}
    }
  }
  componentDidMount(){
    api('me', (json) => {
      this.setState({
        me: json.data
      });
    });
  }
handleLogoutClick(){
  api('logout', (json) => {
     window.location='/';
  });
}

  render() {
  return (

    <div className="demo-big-content" >
    <Layout>
        <Header className="header-color" title="Learn" scroll>
            <Navigation>
              <Link to="/">Главная</Link>
                <Link to="/subjects">Предметы</Link>
                <Link to="/about">О нас</Link>
                <Link to="/contact">Контакты</Link>
                {
                this.state.me.id?<Link onClick={this.handleLogoutClick.bind(this)} to="#">Выйти</Link>:<Link to="/login">Войти</Link>
                }
            </Navigation>
        </Header>
        <Drawer title="Learn">
            <Navigation>
              <Link to="/">Главная</Link>
              <Link to="/subjects">Предметы</Link>
              <Link to="/about">О нас</Link>
              <Link to="/contact">Контакты</Link>
              {
              this.state.me.id?<Link onClick={this.handleLogoutClick.bind(this)} to="#">Выйти</Link>:<Link to="/login">Войти</Link>
              }
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}
}

export default App;
