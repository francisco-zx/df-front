import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import base64 from 'base-64';
import SingleBlogDetails from './SingleBlogDetails';

export default class SingleEventInfo extends Component {
  render() {
    return (
      <div className={css(style.content) + ' container'}>
        <article className={css(style.details)}>
          {
            this.props.selectedBlog.texto &&
            <p
              className={css(style.description)}
              dangerouslySetInnerHTML={{ __html: base64.decode(this.props.selectedBlog.texto)}}
            >
            </p>
          }
        </article>
        <article className={css(style.flyer)}>
          <SingleBlogDetails selectedBlog={this.props.selectedBlog}/>
        </article>
      </div>
    );
  }
}
const style = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    "@media(max-width: 1024px)": {
      flexDirection: 'column',
    }
  },
  details: {
    flex: 4,
    display: 'flex',
    flexDirection: 'column',
    "@media(max-width: 1024px)": {
      flex: 1,
    },
    "@media(max-width: 480px)": {
      marginTop: '3rem',
    }
  },
  flyer: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    "@media(max-width: 1024px)": {
      flex: 1,
      margin: '0 auto'
    },
    "@media(max-width: 480px)": {
      marginTop: '3rem',
    }
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  subTitle: {
    fontWeight: 500,
    fontSize: '1.6rem',
    marginBottom: '1rem',
    textTransform: 'uppercase'
  },
  description: {
    marginTop: '1rem',
    fontWeight: 500,
    lineHeight: '24pt',
    paddingRight: '2rem',
    marginBottom: '3rem',
    "@media(max-width: 480px)": {
      fontSize: '0.9rem',
      lineHeight: '12pt'
    }
  }
})
