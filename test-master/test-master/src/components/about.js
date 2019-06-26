import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText } from 'react-mdl';

class About extends React.Component {
  render () {
    return (
      <div className="about">
      <Grid className="about-grid">
        <Cell col={12}>
          <div className="about-grid-info">
            <h2>TECHNAXIS — компания разработчиков из Казани. Мы объеденились для создания лучших технологических решений для бизнеса.</h2>
            <p>На пути к изменению и улучшению мира мы успели поучаствовать в разнообразных веб и мобильных проектах. У нас имеется опыт разработки сервисов как на аутсорсе, так и в качестве проектной команды стартапов.
            Свое развитие мы начали в формате лаборатории на базе Высшей ИТИС КФУ в сентябре 2013 года. Каждый год отбираем талантливых ребят, которые интересуются веб-разработкой. У нас студенты изучают технологии, необходимые для разработки, и применяют свои знания на практике в реальных проектах.</p>
            <div className="about-grid-info-team">
            <Grid className="contact-grid">
              <Cell col={6}>
                <Card shadow={0} style={{width: '500px', height: '500px', margin: 'auto'}}>
                  <CardTitle expand style={{color: '#fff', background: 'url(http://technaxis.com/data/img/faces/junir.jpg) center  no-repeat #fff '}}>Муллаяров Юнир</CardTitle>
                  <CardText>
                    ИСПОЛНИТЕЛЬНЫЙ ДИРЕКТОР
                  </CardText>
                </Card>
              </Cell>
              <Cell col={6}>
              <Card shadow={0} style={{width: '500px', height: '500px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://technaxis.com/data/img/faces/ainur.jpg) center  no-repeat #fff'}}>Минибаев Айнур</CardTitle>
                <CardText>
                  ТЕХНИЧЕСКИЙ ДИРЕКТОР
                </CardText>
              </Card>
              </Cell>
              <Cell col={6}>
              <Card shadow={0} style={{width: '500px', height: '500px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://technaxis.com/data/img/faces/makar.jpg) center  no-repeat #fff'}}>Лошаков Макар</CardTitle>
                <CardText>
                  ФРОНТЕНД РАЗРАБОТЧИК
                </CardText>
              </Card>
              </Cell>
              <Cell col={6}>
              <Card shadow={0} style={{width: '500px', height: '500px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://technaxis.com/data/img/faces/vitaly.jpg) center  no-repeat #fff'}}>Терентьев Виталий</CardTitle>
                <CardText>
                  JAVA-BACKEND РАЗРАБОТЧИК
                </CardText>
              </Card>
              </Cell>
              <Cell col={6}>
              <Card shadow={0} style={{width: '500px', height: '500px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://technaxis.com/data/img/faces/ilnar.jpg) center  no-repeat #fff'}}>Хафизов Ильнар</CardTitle>
                <CardText>
                  ANDROID РАЗРАБОТЧИК
                </CardText>
              </Card>
              </Cell>
              <Cell col={6}>
              <Card shadow={0} style={{width: '500px', height: '500px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://technaxis.com/data/img/faces/esben.png) center  no-repeat #fff'}}>Esben Røge</CardTitle>
                <CardText>
                  EXTERNAL SALES CONSULTANT
                </CardText>
              </Card>
              </Cell>
            </Grid>
            </div>
          </div>
        </Cell>
      </Grid>
      </div>
    );
  }
}
export default About;
