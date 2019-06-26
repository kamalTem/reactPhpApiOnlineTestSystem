import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import  RecordModalNumbers  from './recordModalNumbers.js';


class Subjects extends Component {
  render () {
    return (
      <div className="subjects">
      <Grid className="subjects-grid">
        <Cell col={12}>
          <div className="subjects-discription">
            <h2>Наши курсы</h2>
            <p>Обучение программированию онлайн</p>
          </div>
        </Cell>
      </Grid>

        <Grid className="subject-card">
        <Cell col={4}>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">JavaScript</h4>
            <h5 className="card-text">JavaScript является одним из самых мощных и гибких языков программирования. Он обеспечивает динамическое поведение на большинстве веб-сайтов, включая этот.</h5>
            < RecordModalNumbers />
          </div>
        </div>
        </Cell>
        <Cell col={4}>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">React</h4>
            <h5 className="card-text">JavaScript-библиотека для разработки пользовательских интерфейсов.</h5>
            < RecordModalNumbers />
          </div>
        </div>
        </Cell>
        <Cell col={4}>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Java</h4>
            <h5 className="card-text">Java является одним из самых популярных языков программирования, в основном из-за того, насколько он универсален и совместим.</h5>
            < RecordModalNumbers />
          </div>
        </div>
        </Cell>
      </Grid>
      </div>
    );
  }
}

export default Subjects;
