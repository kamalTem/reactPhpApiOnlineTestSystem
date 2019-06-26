import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Tabs, Tab, Grid, Cell, Button } from 'react-mdl';
import queryString from 'query-string';
import { api } from './helpers.js';

class StudentTest extends Component {

    constructor(props) {
      super(props);
      let params = queryString.parse(this.props.location.search);
      this.state={
        id:params.id,
        data:[],
        count: 0,
        answers:[],
        finish: false
       };
    }

  componentDidMount(){
        api('start-test', (json) => {
        this.setState({
        data: json.data
        })
      }, {id_lesson:this.state.id});
    }
   handleClick=(idx)=>{
    this.state.answers.push(parseInt(idx)+1);
     if(this.state.count==this.state.data.questions.length-1){
       api('stop-test', (json) => {
         this.setState({
          finish: true,
          correct: json.data,
          inCorrect: this.state.data.questions.length-json.data
         })
        setTimeout(()=>window.location = '/studentProfile', 6000);
     }, {id:this.state.data.id,answers:this.state.answers});
     }else {
       this.setState({
       count: this.state.count+1
       })
     }
   }

   render(){
   return(
     <div className="studentTestPage-wrapper-score">
       {!this.state.finish && this.state.data && this.state.data.questions && <Layout
         question={this.state.data.questions[this.state.count].question}
         options={JSON.parse(this.state.data.questions[this.state.count].answers)}
         handleClick={this.handleClick} />
       }
       { this.state.finish &&
         <div>
           <h3>Правильные:{this.state.correct}</h3>
           <h3>Не правильные:{this.state.inCorrect}</h3>
          </div>
       }
     </div>
   )
 }
}
 class Layout extends React.Component{
   constructor(props){
     super(props)

   }
click(i){
  this.props.handleClick(i.target.value);
}
   render (props){
   return(
   <div className="studentTestPage-wrapper">
   <div className="studentTestPage-wrapper-dark"><h2>{this.props.question}</h2></div>
   <div className="studentTestPage-wrapper-field">
   {
       this.props.options.map((option, i)=>{
       return <button key={i} onClick={this.click.bind(this)} value={i} className="btn btn-block btn-dark">{option}</button>
     })

   }
   </div>


   </div>
   )
 }
}

export default StudentTest;
