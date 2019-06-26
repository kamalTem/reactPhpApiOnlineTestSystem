import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText,CardActions , Button } from 'react-mdl';

class TeacherPageExample extends React.Component {
  render () {
    return (
      <div className="teacherPageExample">
      <Grid className="demo-grid-2">
          <Cell col={4}>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
            <CardTitle expand style={{color: '#000', background: 'url(http://www.humanasset.gr/wp-content/uploads/2013/11/Training_Needs_Analysis_featured_320x200.jpg) bottom right 15% no-repeat #fff'}}></CardTitle>
            <CardText>
              Петрова Елена Javascript разработчик
            </CardText>
            </Card>
          </Cell>
          <Cell col={7}>
            <h5 style={{'margin-top':'60px'}}>Высшее образование</h5>
            <p>Волгоградский государственный педагогический университет (Волгоградский государственный социально-педагогический университет), Волгоград
              Математический, Информатика с дополнительной специальностью английский язык
            </p>
            <p>Навыки: JavaScript, React, NodeJs</p>
            <p>Remember outweigh do he desirous no cheerful. Do of doors water ye guest. We if prosperous comparison middletons at. Park we in lose like at no. An so to preferred convinced distrusts he determine. In musical me my placing clothes comfort pleased hearing. Any residence you satisfied and rapturous certainty two. Procured outweigh as outlived so so. On in bringing graceful proposal blessing of marriage outlived. Son rent face our loud near.

Inquietude simplicity terminated she compliment remarkably few her nay. The weeks are ham asked jokes. Neglected perceived shy nay concluded. Not mile draw plan snug next all. Houses latter an valley be indeed wished merely in my. Money doubt oh drawn every or an china. Visited out friends for expense message set eat.

Maids table how learn drift but purse stand yet set. Music me house could among oh as their. Piqued our sister shy nature almost his wicket. Hand dear so we hour to. He we be hastily offence effects he service. Sympathize it projection ye insipidity celebrated my pianoforte indulgence. Point his truth put style. Elegance exercise as laughing proposal mistaken if. We up precaution an it solicitude acceptance invitation.

Ecstatic advanced and procured civility not absolute put continue. Overcame breeding or my concerns removing desirous so absolute. My melancholy unpleasing imprudence considered in advantages so impression. Almost unable put piqued talked likely houses her met. Met any nor may through resolve entered. An mr cause tried oh do shade happy. </p>
          </Cell>
          <Cell col={1}>
          </Cell>
      </Grid>
      </div>
    );
  }
}
export default TeacherPageExample;
