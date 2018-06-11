import React, { Component } from 'react';
import  { StyleSheet, css } from 'aphrodite';

export default class SearchPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      search: '',
      filteredBlog: {}
    }
  }
  componentWillMount(){
  }
  filterBlog = (search) => {
    let searchTerms = document.location.href.split('/')[4];
    let filteredBlog = this.props.blog.filter((blog) => {return blog.nombre.includes(searchTerms)})
    this.setState({filteredBlog: filteredBlog})
  }
  render(){
    return(
      <section>
        <article className={css(style.hero)}>
          <aside className={css(style.heroAside)}>Resultados de la búsqueda:</aside>
          <h1 className={css(style.heroTitle)}>{`"${this.props.match.params.search}"`}</h1>
        </article>
        <article className={css(style.results) + ' container'}>
          <h3 className={css(style.noResults)}>Blog</h3>
          {
            this.state.filteredBlog.length &&
              this.state.filteredBlog.map((item, index) => {
                return(
                  <div>{item.nombre}</div>
                )
              })
          }
        </article>


      </section>
    )
  }
}
const style = StyleSheet.create({
  hero: {
    height: '34vh',
    display: 'flex',
    background: 'rgb(233, 233, 235)',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  heroAside: {
    fontWeight: '100',
    padding: '1rem',
    fontSize: '1.5rem'
  },
  heroTitle: {
    fontSize: '4rem',
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  noResults: {
    fontSize: '2rem',
    textAlign: 'center',
    padding: '3rem'
  }
})
