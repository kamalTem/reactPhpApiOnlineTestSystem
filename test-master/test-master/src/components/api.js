import React, { Component } from 'react';
import Registration from './registration.js';
import { api } from './helpers.js';

class APIComponent extends React.Component {
  constructor(props) {
   super(props);
   this.state = {
     items: [],
     isLoaded: false,
   };
 }

 componentDidMount() {
   api('get-users', (json) => {
     this.setState({
       isLoaded: true,
       items: json.data
     })
   });
   api('login', (json) => {
   }, {
   }, 'post');
 }
 render() {
   const { isLoaded, items } = this.state;
   if (!isLoaded) {
     return <div>Ошибка</div>;
   } else {
     return (
      <div>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              Email: {item.email}
              first_name: {item.first_name}
            </li>
          ))};
        </ul>
      </div>
     );
   }
 }
}
export default APIComponent;
