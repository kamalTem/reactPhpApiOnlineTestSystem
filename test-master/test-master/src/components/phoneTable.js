import React, { Component } from 'react';
import { Button } from 'react-mdl';
import { Table } from 'react-bootstrap';
import { api } from './helpers.js';

class PhoneTable extends Component {
  constructor(props) {
   super(props);
   this.state = {
     items: [],
     isLoaded: false,
   };
 }

 componentDidMount() {
   api('get-phone-applications', (json) => {
     this.setState({
       isLoaded: true,
       items: json.data
     })
   });
 }

 render() {
   const { isLoaded, items } = this.state;
   if (!isLoaded) {
     return <div>Ошибка</div>;
   } else {
     return (
      <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Телефон</th>
          </tr>
        </thead>
        <tbody>
        {items.map((item, i) =>
          <tr key={item.id}>
            <td>{item.name}</td>
            <td> {item.phone}</td>
          </tr>
          )}
        </tbody>
      </Table>
      </div>
     );
   }
 }
}

export default PhoneTable;
