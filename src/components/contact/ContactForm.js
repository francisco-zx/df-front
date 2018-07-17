import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import HomeSliderPic from '../../assets/home/home_slider.jpg';
import { toast } from 'react-toastify';

import Overlay from '../layout/Overlay';

export default class ContactPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      sent: false
    }
  }
  sendMail = () => {
    this.toastId = toast('Cargando...', {hideProgressBar: true, position: 'bottom-right', className: 'animated rotateY ', autoClose: false})
    fetch('https://dfapi.dlmr.co/api/contacto', {
      method: 'post',
      body: JSON.stringify({
        'name': this.state.name,
        'email': this.state.email,
        'subject': this.state.subject,
        'message': this.state.message
      })
    }).then((response) => {
      if(response.ok){
        toast.update(this.toastId, { render: `👋 ${this.state.name.split(' ')[0]}, tu consulta fue recibida.`,hideProgressBar: false, type: toast.TYPE.SUCCESS, autoClose: 5000, className: 'animated rotateY ' });
      }else{
        toast.update(this.toastId, { render: 'Hubo en error al enviar el correo.',hideProgressBar: false, type: toast.TYPE.ERROR, autoClose: 5000, className: 'rotateY animated' });
      }
    });
  }
  handleChange = (e, field) => {
    let formData = {}
    formData[field] = e.target.value;
    this.setState(formData, () => {console.log(this.state)})
  }
  render() {
    return (
      <section className={css(style.contactForm)}>
        <h3 className={css(style.contactTitle) + ' animated fadeIn'}>CONTACTO</h3>
        <form className={css(style.contactFormForm)}>
          <div className={css(style.row)}>
            <input className={css(style.input, style.inputName) + ' animated fadeIn'} onChange={(e, field) => {this.handleChange(e, 'name')}} type='text' placeholder='Nombre' name='name' />
            <input className={css(style.input) + ' animated fadeIn'} onChange={(e, field) => {this.handleChange(e, 'email')}} type='email' placeholder='E-Mail' name='email' />
          </div>
          <div className={css(style.row)}>
            <input className={css(style.input) + ' animated fadeIn'} onChange={(e, field) => {this.handleChange(e, 'subject')}} type='text' placeholder='Asunto' name='subject' />
          </div>
          <div className={css(style.row)}>
            <textarea className={css(style.inputArea) + ' animated fadeIn'} onChange={(e, field) => {this.handleChange(e, 'message')}} type='text' placeholder='Escribí aca tu mensaje...' name='message' />
          </div>
          <div className={css(style.row)}>
            <a className={css(style.submit) + ' animated fadeIn'} onClick={() => {this.sendMail()}} type='submit' name='send'>
              ENVIAR
            </a>
          </div>
        </form>
      </section>
    );
  }
}
const style = StyleSheet.create({
  contactForm: {
    display: 'flex',
    alignItems: 'center',
    flex:1,
    justifyContent: 'center',
    zIndex: 8,
    padding: '6rem',
    flexDirection: 'column',
    "@media(max-width: 1024px)": {
      padding: '3rem'
    },
    "@media(max-width: 480px)": {
      padding: '2rem'
    }
  },
  contactTitle: {
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'white',
    display: 'inline-block',
    paddingBottom: '4px',
    borderBottom: '1px solid white',
    marginBottom: '3rem',
    "@media(max-width: 1024px)": {
      marginTop: '2rem',
    },
    "@media(max-width: 900px)": {
      marginTop: '3rem',
    },
    "@media(min-width: 480px)": {
      display: 'none'
    }
  },
  contactFormForm: {
    maxWidth: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  row: {
    display: 'flex',
    flex: 1,
    padding: '0 3rem',
    "@media(max-width: 480px)": {
      padding: '0'
    }
  },
  input: {
    display: 'flex',
    flex: 1,
    padding: '1.5rem',
    background: 'white',
    marginBottom: '1.5rem',
    border: '1px solid grey'
  },
  inputName: {
    marginRight: '1rem'
  },
  inputArea: {
    display: 'flex',
    flex: 1,
    padding: '1.5rem',
    background: 'white',
    width: '12rem',
    marginBottom: '1.5rem',
    border: '1px solid grey',
    height: '15vh',
  },
  submit: {
    padding: '1rem 1rem',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '0',
    "@media(max-width: 480px)": {
      margin: '0 auto'
    }
  },
  sent: {
    background: '#07bc0c'
  }
})
