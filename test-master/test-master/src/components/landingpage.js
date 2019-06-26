import React, { Component } from 'react';
import { Grid, Cell, Button, Card, CardTitle, CardActions, CardMenu, IconButton, CardText, List, ListItem, ListItemContent, Textfield } from 'react-mdl';
import  Subjects  from './subjects.js';
import  RecordModalNumbers  from './recordModalNumbers.js';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render () {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="landing-discription">
              <h2>Добро пожаловать на новый образовательный портал</h2>
              < RecordModalNumbers />
            </div>
          </Cell>
        </Grid>
        <Subjects />
        <Grid className="landing-achievements">
          <Cell col={2}></Cell>
          <Cell col={2}>
            <div className="landing-achievements-body">
              <div className="landing-achievements-body-icon">
              </div>
              <div className="landing-achievements-body-discription">
                <p>Web  разработчик</p>
                <p>Angular</p>
              </div>
            </div>
          </Cell>
          <Cell col={2}>
              <div className="landing-achievements-body">
                <div className="landing-achievements-body-icon">
                </div>
                <div className="landing-achievements-body-discription">
                  <p>ПО  разработчик</p>
                  <p>С++</p>
                </div>
              </div>
          </Cell>
          <Cell col={2}>
            <div className="landing-achievements-body">
              <div className="landing-achievements-body-icon">
              </div>
              <div className="landing-achievements-body-discription">
                <p>Дизайн</p>
                <p>Photoshop, Figma</p>
              </div>
            </div>
          </Cell>
          <Cell col={2}>
            <div className="landing-achievements-body">
              <div className="landing-achievements-body-icon">
              </div>
              <div className="landing-achievements-body-discription">
                <p>Mobile разработчик</p>
                <p>Java, Swift</p>
              </div>
            </div>
          </Cell>
          <Cell col={2}></Cell>
        </Grid>
        <Grid className="landing-team-header">
          <Cell col={12}>
            <h2> Наша команда преподавателей</h2>
          </Cell>
        </Grid>
        <Grid className="landing-team">
          <Cell col={3}>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
            <CardTitle expand style={{color: '#000', background: 'url(http://www.humanasset.gr/wp-content/uploads/2013/11/Training_Needs_Analysis_featured_320x200.jpg) bottom right 15% no-repeat #46B6AC'}}></CardTitle>
            <CardText>
              Петрова Елена Javascript разработчик, опыт во frontend 6 лет (TECHNAXIS)
            </CardText>
            <CardActions border style={{ background: '#2D2D2D' }}>
            <Link to="/teacherPageExample"><Button colored style={{ color: '#fff' }}>Подробнее</Button></Link>
            </CardActions>
            </Card>
          </Cell>
          <Cell col={3}>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
            <CardTitle expand style={{color: '#000', background: 'url(https://bolvglazah.ru/wp-content/cache/thumb/3f/cdb43c027fe7b3f_320x200.jpg) bottom right 15% no-repeat #46B6AC'}}></CardTitle>
            <CardText>
              Фролов Николая Java старший разработчик, опыт 8 лет (TECHNAXIS)
            </CardText>
            <CardActions border style={{ background: '#2D2D2D' }}>
            <Button colored style={{ color: '#fff' }}>Подробнее</Button>
            </CardActions>
            </Card>
          </Cell>
          <Cell col={3}>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
            <CardTitle expand style={{color: '#000', background: 'url(https://compsch.com/wp-content/cache/thumb/ee786b542_320x200.jpg) bottom right 15% no-repeat #46B6AC'}}></CardTitle>
            <CardText>
              Андреев Дмитрий Python разработчик, опыт 4 года (TECHNAXIS)
            </CardText>
            <CardActions border style={{ background: '#2D2D2D' }}>
            <Button colored style={{ color: '#fff' }}>Подробнее</Button>
            </CardActions>
            </Card>
          </Cell>
          <Cell col={3}>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
            <CardTitle expand style={{color: '#000', background: 'url(https://3.bp.blogspot.com/-iOWVAuA9BdM/WIbfmJdBt6I/AAAAAAAAABk/2DKdz6yRtS4NQ53SVbfmD2BN7asaochXACLcB/s320/tecnologia.jpg) bottom right 15% no-repeat #46B6AC'}}></CardTitle>
            <CardText>
              Дмитриенко Яна React разработчик, опыт во frontend 3 года (TECHNAXIS)
            </CardText>
            <CardActions border style={{ background: '#2D2D2D' }}>
            <Button colored style={{ color: '#fff' }}>Подробнее</Button>
            </CardActions>
            </Card>
          </Cell>
        </Grid>
        <Grid className="landing-search">
          <Cell col={12}>
            <h2>Кого мы ищем</h2>
            <p>Мы приглашаем студентов и выпускников любых учебных заведений и даже тех, кто уже работает, но хочет изменить профессию.</p>
            <p>Наша цель — найти самых талантливых и целеустремлённых студентов и дать им возможность стать архитекторами технологических решений.</p>
          </Cell>
        </Grid>
        <div className="wrapper">
        <Grid className="landing-payment">
          <Cell col={12}>
            <h2>Зарплаты</h2>
            <p className="four-info"><i className="fa fa-money" aria-hidden="true"></i>Senior</p>
            <div className="landing-payment-full">
   					    <div className="landing-payment-Notfull" style={{width:"90%"}}>от 90 000 ₽</div>
  				  </div>
            <p className="four-info"><i className="fa fa-money" aria-hidden="true"></i>Middle</p>
            <div className="landing-payment-full">
   					    <div className="landing-payment-Notfull" style={{width:"75%"}}>от 60 000 ₽</div>
  				  </div>
            <p className="four-info"><i className="fa fa-money" aria-hidden="true"></i>Junior</p>
            <div className="landing-payment-full">
   					    <div className="landing-payment-Notfull" style={{width:"65%"}}>30 000 ₽</div>
  				  </div>
          </Cell>
        </Grid>
        </div>
        <div className="footer">
        <Grid className="demo-grid-1">
            <Cell col={2}></Cell>
           <Cell col={3}>
            <h5>Контакты</h5>
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
           </Cell>
           <Cell col={3}>
            <h5>Навигация</h5>
            <List>
              <ListItem>
                <ListItemContent>
                <Link to="/landingpage">Главная</Link>
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent>
                 <Link to="/subjects">Предметы</Link>
                </ListItemContent>
              </ListItem>

              <ListItem>
              <ListItemContent>
               <Link to="/about">О нас</Link>
              </ListItemContent>
              </ListItem>

              <ListItem>
              <ListItemContent>
              <Link to="/contact">Контакты</Link>
              </ListItemContent>
              </ListItem>

              <ListItem>
              <ListItemContent>
               <Link to="/login">Войти</Link>
              </ListItemContent>
              </ListItem>
            </List>
           </Cell>
           <Cell col={3}>
            <h5>Часы проведения курсов</h5>
            <List>
              <ListItem>
                <ListItemContent>
                 Вторник : 19:00-21:00
                </ListItemContent>
              </ListItem>

              <ListItem>
              <ListItemContent>
               Среда : 19:00-21:00
              </ListItemContent>
              </ListItem>

              <ListItem>
              <ListItemContent>
              Суббота : 19:00-21:00
              </ListItemContent>
              </ListItem>

              <ListItem>
              <ListItemContent>
              <i className="fa fa-instagram" aria-hidden="true" />
              <i className="fa fa-vk" aria-hidden="true"/>
              </ListItemContent>
              </ListItem>
            </List>
           </Cell>
           <Cell col={1}>
           </Cell>
       </Grid>
        </div>
      </div>
    );
  }
}

export default Landing;
