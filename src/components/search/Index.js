import React, { Component } from 'react';
import  { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import EventsGrid from './EventsGridSearch';
import BlogGrid from './BlogGridSearch';

class SearchPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      search: '',
      filteredBlog: {}
    }
  }

  componentWillMount(){
    window.scrollTo(0,0);
  }

  render(){
    return(
      <section>
        <article className={css(style.hero)}>
          <aside className={css(style.heroAside)}>Resultados de la búsqueda:</aside>
          <h1 className={css(style.heroTitle)}>{`"${this.props.match.params.search}"`}</h1>
        </article>
        <article className={css(style.results) + ' container'}>
          <EventsGrid events={this.props.events} history={this.props.history}/>
        </article>
        <article className={css(style.results) + ' container'}>
          <BlogGrid blog={this.props.blog} history={this.props.history}/>
        </article>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  events: state.search.events,
  blog: state.search.blog
})

export default connect(mapStateToProps, null)(SearchPage);

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
