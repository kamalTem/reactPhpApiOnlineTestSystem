import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import { Button, Card, Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from './helpers.js';
import queryString from 'query-string';
import { Fragment } from 'react'

class StudentLessonPage extends Component {
  constructor(props) {
    super(props);
    let params = queryString.parse(this.props.location.search);
    this.state={
      id:params.id || 0,
      message: ''
     };
  }

  componentDidMount(){
    api('get-lessons', (json) => {
      this.setState({
        message: json.data.theory
      })
    },{id:this.state.id});
  }

  render () {
    return (
      <div className="lessonPage">
        <div className="lessonPage-info" dangerouslySetInnerHTML={{__html: this.state.message}}>

        </div>
      <div className="lessonPage-test" style={{"margin-top":"20px"}}>
        <Link to="/studentProfile">Назад</Link>
      </div>
      </div>
    );
  }
}
export default StudentLessonPage;
