import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

class AboutText extends Component {
  render() {
    return (
      <article className={css(style.aboutText)}>
        <div className={css(style.content) + ' container'}>
          <h2 className={css(style.title) + ' animated fadeIn'}>DF Entertainment</h2>
          <h4 className={css(style.subTitle) + ' animated fadeIn'}>Un compromiso con la diversión.</h4>
          {
            this.props.about ?
              <p
                className={css(style.text) + ' animated fadeIn'}
                dangerouslySetInnerHTML={{ __html: this.props.about.texto}}
              >
              </p>
            : ''
          }
        </div>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  about: state.about
})

export default connect(mapStateToProps, null)(AboutText);

const style = StyleSheet.create({
  aboutText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center'
  },
  content: {


  },
  title: {
    color: '#161616',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    "@media(max-width: 480px)": {
      display: 'none'
    }
  },
  subTitle: {
    fontWeight: 500,
    fontSize: '1.6rem',
    marginBottom: '1rem',
    animationDelay: '0.3s'
  },
  text: {
    maxWidth: '55%',
    margin: '0 auto',
    padding: '1rem',
    fontSize: '1.1rem',
    lineHeight: 1.4,
    animationDelay: '0.6s',
    "@media(max-width: 480px)": {
      maxWidth: 'none',
      padding: 0
    },
    "@media(max-width: 480px)": {
      margin: 0,
      maxWidth: 'none',
      textAlign: 'left',
      fontWeight: 500,
      fontSize: '0.9rem',
      lineHeight: '12pt',
      animationDelay: '0.6s'
    }
  }
})
