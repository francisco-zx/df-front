import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SectionTitle from '../layout/SectionTitle';
import BorderGradient from '../layout/BorderGradient';

class EventsGrid extends Component {

  goToEvent = slug => {
    this.props.history.push(`/event/${slug}`)
  }

  render() {
    return (
      <div className='container'>
        <SectionTitle text='Eventos'/>
        <div className={css(style.venuesGrid)}>
          {
            this.props.events.map((event, index) => {
              return(
                  <div key={index} className={event.img_principal_formato != 'horizontal' ? css(style.venuesGridItem, style.hide) + ' animated fadeIn clickable hover-shadow' : css(style.venuesGridItemFull, style.hide) + ' animated fadeIn clickable ' } onClick={slug => this.goToEvent(event.slug)}>
                    <div style={{padding: '0.5rem'}} >
                      <img className={css(style.itemImg)} src={event.img_principal} />
                      <div className={css(style.venueName)}>{event.nombre}</div>
                      <BorderGradient height='6px'/>
                    </div>
                  </div>
              )
            })
          }
          {
            this.props.events.map((event, index) => {
              return(
                <div key={index} className={css(style.mobile)}>
                  <div className={css(style.venuesGridItemFull) + ' animated fadeIn'} onClick={slug => this.goToEvent(event.slug)}>
                    <div style={{padding: '0.5rem'}}>
                      <img className={css(style.itemImg)} src={event.img_portada} />
                      <div className={css(style.venueName)}>{event.nombre}</div>
                      <BorderGradient height='6px'/>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, null)(EventsGrid);
const style = StyleSheet.create({
  venuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-between',
  },
  mobile: {
    '@media(min-width: 1024px)': {
      display: 'none'
    }
  },
  venuesGridItem: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '33%',
    maxWidth: '33%',
    marginBottom: '2rem',
    flexBasis: '33%',
    overflow: 'hidden'
  },
  venuesGridItemFull: {
    display: 'flex',
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    overflow: 'hidden',
    flexBasis: '100%',
  },
  itemImg: {
    width: '100%',
  },
  venueName:{
    background: '#161616',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
    padding: '1rem'
  },
  hide: {
    "@media(max-width: 1024px)": {
      display: 'none'
    }
  }
})
