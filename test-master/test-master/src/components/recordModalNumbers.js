import React, { Component } from 'react';
import { Button } from 'react-mdl';
import { Modal, Form, Table } from 'react-bootstrap';
import { api } from './helpers.js';

class RecordModalNumbers extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      act: 0,
      index: '',
      datas: [],
      items: [],
      isLoaded: true,
      name: '',
      phone: ''
    };
  }

  handleClose() {
   this.setState({ show: false });
 }

 handleShow() {
   this.setState({ show: true });
 }

  fSubmit = (e) =>{
    api('add-phone-applications', (json) => {
    }, {
      name: this.state.name,
      phone: this.state.phone,
    }, 'post');
  }

  render() {
    let datas = this.state.datas;
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Ошибка</div>;
    } else {
    return (
      <div className="adminCRUDphone">
             <>
               <Button variant="primary" onClick={this.handleShow}>
                 Записаться
               </Button>
               <Modal show={this.state.show} onHide={this.handleClose}>
                 <Modal.Header closeButton>
                   <Modal.Title>Введите имя и номер</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                 <form ref="myForm" className="myForm">
                   <input type="text" ref="name" placeholder="name" className="phoneFormField"   onChange={(e) => { this.setState({ name: e.target.value}) }} /><br/>
                   <input type="text" ref="phone" placeholder="phone" className="phoneFormField"   onChange={(e) => { this.setState({ phone: e.target.value}) }} /><br/>
                   <Button ripple onClick={(e)=>this.fSubmit(e)} className="phoneFormmyButton" >Создать</Button>
                 </form>
                 </Modal.Body>
                 <Modal.Footer>
                   <Button variant="secondary" onClick={this.handleClose}>
                     Закрыть
                   </Button>
                 </Modal.Footer>
               </Modal>
             </>
      </div>
    );
  }
  }
}

export default RecordModalNumbers;
