import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { StyleSheet, css } from 'aphrodite';
import base64 from 'base-64';

import BlogGridItem from './BlogGridItem';
import SectionTitle from '../layout/SectionTitle';
import BorderGradient from '../layout/BorderGradient';

class BlogGrid extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    
  }

  render() {
    const settings = {
      default: 3,
      1024: 2,
      480: 1
    };
    return (
      <article className='container'>
        <SectionTitle text='News' />
        <Masonry
          breakpointCols={settings}
          className={css(style.masonryGrid) + ' hover-parent'}
          columnClassName="my-masonry-grid_column">
            {
              this.props.blog.length ?
                this.props.blog.map((item, index) => {
                  const img = new Image();
                  img.url = item.img_principal;

                  return(
                    <BlogGridItem
                      title={item.nombre}
                      imgPrincipal={item.img_principal}
                      slug={item.slug}
                      key={item.id}
                      item={item}
                      history={this.props.history}
                    />
                  )
                })
              : <h1>Cargando</h1>
            }
        </Masonry>
      </article>
    );
  }
}
const mapStateToProps = state =>({
 blog: state.blog
})
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(BlogGrid);

const style = StyleSheet.create({
  masonryGrid: {
    display: '-webkit-box', /* Not needed if autoprefixing */
    display: '-ms-flexbox', /* Not needed if autoprefixing */
    display: 'flex',
    width: 'auto',
    "@media(max-width: 480px)": {
      paddingLeft: 0
    }
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
    height: 'auto',
    "@media(max-width: 480px)": {
      objectFit: 'cover',
      maxHeight: '12rem'
    }
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
    maxWidth: '60%',
    transition: 'all 0.4s ease',
    "@media(max-width: 1360px)": {
      fontSize: '2rem',
      padding: '30px',
    },
    "@media(max-width: 1170px)": {
      fontSize: '1.6rem',
      padding: '20px',
    },
    "@media(max-width: 1024px)": {
      fontSize: '2.2rem',
      padding: '40px',
    },
    "@media(max-width: 890px)": {
      fontSize: '2rem',
      padding: '30px',
    },
    "@media(max-width: 767px)": {
      fontSize: '1.8rem',
      padding: '20px',
    },
    "@media(max-width: 696px)": {
      fontSize: '1.6rem',
      padding: '10px',
    },
    "@media(max-width: 585px)": {
      fontSize: '1.4rem',
      padding: '10px',
    },
    "@media(max-width: 480px)": {
      fontSize: '2rem',
      padding: '10px',
    }
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
    paddingRight: '-6px',
    "@media(max-width: 1360px)": {
      top: 30,
      left: 30,
    },
    "@media(max-width: 1170px)": {
      top: 20,
      left: 20,
    },
    "@media(max-width: 1024px)": {
      top: 40,
      left: 40,
    },
    "@media(max-width: 890px)": {
      top: 30,
      left: 30,
    },
    "@media(max-width: 767px)": {
      top: 20,
      left: 20,
    },
    "@media(max-width: 696px)": {
      top: 10,
      left: 10,
    },
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
})
