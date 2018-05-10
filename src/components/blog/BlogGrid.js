import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css'

import SectionTitle from '../layout/SectionTitle';
import BorderGradient from '../layout/BorderGradient';

import Blog1 from '../../assets/blog/blog1.jpg';
import Blog2 from '../../assets/blog/blog2.jpg';
import Blog3 from '../../assets/blog/blog3.jpg';
import Blog4 from '../../assets/blog/blog4.jpg';
import Blog5 from '../../assets/blog/blog5.jpg';
import Blog6 from '../../assets/blog/blog6.jpg';

export default class BlogGrid extends Component {
  render() {
    return (
      <article className='container'>
        <SectionTitle text='Blog'/>
        <Masonry
          breakpointCols={3}
          style={style.masonryGrid}
          className='hover-parent'
          columnClassName="my-masonry-grid_column">
            <div style={style.blogItem} className='hover-shadow'>
              <div style={style.blogItemPreview}>
                <img src={Blog1} style={style.blogItemImg}/>
                <aside style={style.typeTag}>Novedades</aside>
                <h3 style={style.title}>Presentamos Art Basel fumando porro con amigos</h3>
                <div style={style.overlay}></div>
              </div>
              <div style={style.blogButton}>
              Leer más
              </div>
              <BorderGradient />
            </div>
            <div style={style.blogItem} className='hover-shadow'>
              <div style={style.blogItemPreview}>
                <img src={Blog2} style={style.blogItemImg} />
                <div style={style.typeTag}>Prensa</div>
                <h3 style={style.title}>Perry Farrel nos cuenta del Lolla Argentina</h3>
                <div style={style.overlay}></div>
              </div>
              <div style={style.blogButton}>
              Leer más
              </div>
              <BorderGradient />
            </div>
            <div style={style.blogItem} className='hover-shadow'>
              <div style={style.blogItemPreview}>
                <img src={Blog3} style={style.blogItemImg} />
                <div style={style.typeTag}>Video</div>
                <h3 style={style.title}>Harry Styles sobre su visita a Argentina</h3>
                <div style={style.overlay}></div>
              </div>
              <div style={style.blogButton}>
              Leer más
              </div>
              <BorderGradient />
            </div>
            <div style={style.blogItem} className='hover-shadow'>
              <div style={style.blogItemPreview}>
                <img src={Blog4} style={style.blogItemImg} />
                <div style={style.typeTag}>Video</div>
                <h3 style={style.title}>Registro de la fiesta de apertura de la DF House</h3>
                <div style={style.overlay}></div>
              </div>
              <div style={style.blogButton}>
              Leer más
              </div>
              <BorderGradient />
            </div>
            <div style={style.blogItem} className='hover-shadow'>
              <div style={style.blogItemPreview}>
                <img src={Blog5} style={style.blogItemImg} />
                <div style={style.typeTag}>Video</div>
                <h3 style={style.title}>Entrevista a Diego Finkelstein en Metro</h3>
                <div style={style.overlay}></div>
              </div>
              <div style={style.blogButton}>
              Leer más
              </div>
              <BorderGradient />
            </div>
            <div style={style.blogItem} className='hover-shadow'>
              <div style={style.blogItemPreview}>
                <img src={Blog6} style={style.blogItemImg} />
                <div style={style.typeTag}>Video</div>
                <h3 style={style.title}>DFGroup abre su nueva oficina</h3>
                <div style={style.overlay}></div>
              </div>
              <div style={style.blogButton}>
              Leer más
              </div>
              <BorderGradient />
            </div>
        </Masonry>
      </article>
    );
  }
}
const style = {
  masonryGrid: {
    display: '-webkit-box', /* Not needed if autoprefixing */
    display: '-ms-flexbox', /* Not needed if autoprefixing */
    display: 'flex',
    width: 'auto'
  },
  blogItem: {
    marginBottom: '3rem'
  },
  blogItemPreview: {
    position: 'relative',
    overflow: 'hidden'
  },
  blogItemImg: {
    position: 'relative',
    width: '100%',
    height: 'auto'
  },
  overlay: {
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.6+100 */
    background: '-moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)',
    background: '-webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.6) 100%)',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.6) 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#00000000", endColorstr=#99000000",GradientType=0 )',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    verticalAlign: 'top'
  },
  title: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '40px',
    fontSize: '2.2rem',
    zIndex:2,
    fontWeight: '500',
    color: 'white',
    maxWidth: '60%'
  },
  typeTag: {
    position: 'absolute',
    top: 40,
    left: 40,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: '500',
    letterSpacing: '6px',
    paddingRight: '-6px',
    borderBottom: '1px solid white',
    textAlign: 'center',
    paddingBottom: '0.2rem',
    paddingRight: '-6px'
  },
  blogButton: {
    zIndex:2,
    background: '#e9e9eb',
    padding: '1.5rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    color: '#161616',
    fontWeight: 'bold'
  }
}
