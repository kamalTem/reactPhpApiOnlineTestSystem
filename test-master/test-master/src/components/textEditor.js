import React, { Component } from 'react';
import { Button } from 'react-mdl';
import { Link } from 'react-router-dom';
import TeacherProfileLessons from './teacherProfileLessons';
import { api } from './helpers.js';
import queryString from 'query-string';

class TextEditor extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userInput: "",
      showHTML: false,
      updateInput: "",
      lesson: null
    };
    let params = queryString.parse(this.props.location.search);
    api('get-lessons', (json) => {
      this.setState({
        lesson: json.data,
        userInput: json.data.theory
      });
      this.showHTML();
    }, { id: params.id });
  }

  userType = e => {
    this.setState({ [e.target.name]: e.target.value, showHTML: false });
  };

  createWindow = () => {
    return {
      __html: `<html>${
        this.state.showHTML ? this.state.userInput : this.state.updateInput
      }</html>`
    };
  };
  showHTML = () => {
    this.setState({
      showHTML: !this.state.showHTML,
      updateInput: this.state.userInput
    });
    var aa=this.state.userInput;
  };

  fSubmit(){
      api('edit-lesson', (json) => {
        //success
      }, {
        id: this.state.lesson.id,
        theory: this.state.userInput
      }, 'post');
  }

  render() {
    return (
      <div className="textEditor">
        <main className="textEditor-main">
          <div className="textEditor-window-container">
            <textarea
              className="textEditor-textarea"
              name="userInput"
              value={this.state.userInput}
              onChange={e => this.userType(e)}
            />
          </div>
          <div className="textEditor-window-container">
            <div className="under-title">
              <div
                className="fake-window"
                dangerouslySetInnerHTML={this.createWindow()}
              />
            </div>
          </div>
        </main>
        <Link to="/teacherProfile" style={{ 'color': '#fff',
    'padding': '10px 20px',
    'border-radius': '1px',
    'background': '#363636',
    'margin-bottom': '10px',
    'font-size': '15px',
    'text-decoration': 'none'}}>Назад</Link>
        <Button style={{'background':'#fff','margin-bottom': '10px'}} onClick={this.showHTML}>Проверить</Button>
        <Button style={{'background':'#fff'}} onClick={this.fSubmit.bind(this)}>Добавить</Button>
      </div>
    );
  }
}
export default TextEditor;
