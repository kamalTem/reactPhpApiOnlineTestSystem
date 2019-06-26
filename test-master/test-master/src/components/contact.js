import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, Textfield ,Button } from 'react-mdl';
import { api } from './helpers.js';

class Contact extends Component {
  constructor(props) {
    super(props,);
    this.state = {
      isLoaded: false,
      name: '',
      email: '',
      message: ''
    };
  }


    componentDidMount(){
      api('get-messages', (json) => {
        this.setState({
          items: json.data
        })
      });
      api('login', (json) => {
      }, {
          name: this.state.name
      }, 'post');
    }

    fSubmit = (e) =>{
      api('messages', (json) => {
      }, {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }, 'post');
    }
  render () {
    return (
      <div className="contact">
            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent>
                <i className="fa fa-map" aria-hidden="true" />
                Петербургская ул., 35, Казань
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent>
                <i className="fa fa-phone-square" aria-hidden="true" />
                 +7843 202-4229
                </ListItemContent>
              </ListItem>

              <ListItem>
              <ListItemContent>
              <i className="fa fa-fax" aria-hidden="true" />
               +7 987 065 908
              </ListItemContent>
              </ListItem>

              <ListItem>
              <ListItemContent>
              <i className="fa fa-envelope" aria-hidden="true" />
               info@technaxis.com
              </ListItemContent>
              </ListItem>

              <ListItem>
              <ListItemContent>
              <i className="fa fa-skype" aria-hidden="true" />
               technaxis
              </ListItemContent>
              </ListItem>
            </List>
            </div>
            <div className="contact-fields">
            <form ref="myForm" className="myForm">
              <p>Имя</p>
              <Textfield
                onChange={(e) => {this.setState({ name: e.target.value})}}
                label="Егор"
                style={{width: '400px'}}
              />
              <p>Email</p>
              <Textfield
                onChange={(e) => {this.setState({ email: e.target.value})}}
                label="superman@free.com"
                style={{width: '400px'}}
              />
              <p>Сообщение</p>
              <Textfield
                onChange={(e) => {this.setState({ message: e.target.value})}}
                label="Text lines..."
                rows={3}
                style={{width: '400px'}}
            />
              <br />
              <Button ripple onClick={(e)=>this.fSubmit(e)} >Отправить</Button>
                </form>
            </div>
      </div>
    );

  }
}

export default Contact;
