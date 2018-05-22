import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import HomeSliderPic from '../../assets/home/home_slider.jpg';

import Overlay from '../layout/Overlay';

export default class ContactPage extends Component {
  render() {
    return (
      <section className={css(style.contactForm)}>
        <form className={css(style.contactFormForm)}>
          <div className={css(style.row)}>
            <input className={css(style.input, style.inputName)} type='text' placeholder='Nombre' name='name' />
            <input className={css(style.input)} type='text' placeholder='E-Mail' name='email' />
          </div>
          <div className={css(style.row)}>
            <input className={css(style.input)} type='text' placeholder='Asunto' name='subject' />
          </div>
          <div className={css(style.row)}>
            <textarea className={css(style.inputArea)} type='text' placeholder='Escribí aca tu mensaje...' name='message' />
          </div>
          <div className={css(style.row)}>
            <a className={css(style.submit)} type='submit' name='send'>
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
    padding: '6rem'
  },
  contactFormForm: {
    display: 'flex',
    flex:1,
    flexDirection: 'column',
    padding: '5rem'
  },
  row: {
    display: 'flex',
    flex: 1,
    padding: '0 3rem'
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
    borderRadius: '0'

  }
})
