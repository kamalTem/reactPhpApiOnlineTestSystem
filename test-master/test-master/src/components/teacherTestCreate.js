import React, { Component } from 'react';
import { Button } from 'react-mdl';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { api } from './helpers.js';
import queryString from 'query-string';

class TeacherTestCreate extends Component {

  constructor(props){
    super(props);
    let params = queryString.parse(this.props.location.search);
    this.state={
      act: 0,
      index: '',
      datas: [],
      items: [],
      id_lesson: params.id || 0,
      question: [],
      true_answer: [],
      answers: []
    }
  }

  componentDidMount(){
    this.refs.question.focus();
  }

  componentQuestions(){
    api('get-questions', (json) => {
      this.setState({
        isLoaded: true,
        items: json.data
      })
    },{id_lesson: this.state.id_lesson});
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');


    let datas = this.state.datas;

    let answers = [];
    if (this.refs.answer1.value) answers.push(this.refs.answer1.value);
    if (this.refs.answer2.value) answers.push(this.refs.answer2.value);
    if (this.refs.answer3.value) answers.push(this.refs.answer3.value);
    if (this.refs.answer4.value) answers.push(this.refs.answer4.value);

    let data = {
      id_lesson: this.state.id_lesson, question: this.refs.question.value, true_answer: this.refs.right.value, answers: answers
    }
    if(this.state.act === 0){   //new
      api('add-question', (json) => {
      }, data, 'post');

      datas.push(data);
    }else{                      //update
      // let index = this.state.index;
      // datas[index].question = question;
      // datas[index].answer1 = answer1;
      // datas[index].answer2 = answer2;
      // datas[index].answer3 = answer3;
      // datas[index].answer4 = answer4;
      // datas[index].right = right;
    }
    console.log(data);
    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.question.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.question.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.question.value = data.question;
    this.refs.answer1.value = data.answer1;
    this.refs.answer2.value = data.answer2;
    this.refs.answer3.value = data.answer3;
    this.refs.answer4.value = data.answer4;
    this.refs.right.value = data.right;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.question.focus();
  }
// onclick="callApi('admin-add-question', { id_lesson: 1, true_answer: 1, question: 'Выбери 1', answers: ['Вараинт 1', 'Вараинт 2', 'Вараинт 3'] }, 'post')"
  render() {
    let datas = this.state.datas;
    const { isLoaded, items } = this.state;
    return (
      <div className="teacherTestCreate">
        <h2>{this.state.title}</h2>  <Link to="/teacherProfile">Назад</Link>
        <form ref="myForm" className="teacherTestCreateForm">
          <input type="text" ref="question" placeholder="Вопрос первый" className="formField" /><br />
          <input type="text" ref="answer1" placeholder="Вариант ответа 1" className="formField" /><br />

          <input type="text" ref="answer2" placeholder="Вариант ответа 2" className="formField" /><br />
          <input type="text" ref="answer3" placeholder="Вариант ответа 3" className="formField" /><br />
          <input type="text" ref="answer4" placeholder="Вариант ответа 4" className="formField" /><br />

          <input type="text" ref="right" placeholder="Правильный ответ номер" className="formField" />
          <Button ripple onClick={(e)=>this.fSubmit(e)} className="myButton black" >Добавить вопрос</Button>
        </form>
        <pre>
        {/*старый вывод,он рабочий но я сделал таблицу*/}
          {/*datas.map((data, i) =>
            <li key={i} className="teacherTestCreateList">
              {i+1}. {data.question}, {data.answer1} ,{data.answer2} ,{data.answer3} ,{data.answer4}, {data.right}
              <Button accent onClick={()=>this.fRemove(i)} className="teacherTestCreateListButton red">Удалить</Button>
              <Button primary onClick={()=>this.fEdit(i)} className="teacherTestCreateListButton blue">Редактировать</Button>
            </li>
          )  */}
        </pre>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Вопрос</th>
              <th>Ответ1</th>
              <th>Ответ2</th>
              <th>Ответ3</th>
              <th>Ответ4</th>
              <th>Правильный</th>
            </tr>
          </thead>
          <tbody>
          {datas.map((data, i) =>
            <tr key={i}>
              <td>{i+1}</td>
              <td>{data.question}</td>
              <td> {data.answers[0]}</td>
              <td>{data.answers[1]}</td>
              <td> {data.answers[2]}</td>
              <td>{data.answers[3]}</td>
              <td> {data.true_answer}</td>
              <td><Button accent onClick={()=>this.fRemove(i)} className="teacherTestCreateListButton red">Удалить</Button></td>
              <td><Button primary onClick={()=>this.fEdit(i)} className="teacherTestCreateListButton blue">Редактировать</Button></td>
            </tr>
            )}
          </tbody>
        </Table>
      </div>
    );
  }
}


export default TeacherTestCreate;
