import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import SectionTitle from '../layout/SectionTitle';
import VenuePlaceholder from '../../assets/home/venue_placeholder.jpg';
import BorderGradient from '../layout/BorderGradient';

import Grid1 from '../../assets/events/events_grid_1.png';
import Grid2 from '../../assets/events/events_grid_2.png';
import Grid3 from '../../assets/events/events_grid_3.png';
import Grid4 from '../../assets/events/events_grid_4.png';
import Grid5 from '../../assets/events/events_grid_5.png';
import Grid6 from '../../assets/events/events_grid_6.png';
import Grid7 from '../../assets/events/events_grid_7.png';
import Grid8 from '../../assets/events/events_grid_8.png';
import Grid9 from '../../assets/events/events_grid_9.png';



export default class EventsGrid extends Component {
  render() {
    return (
      <div className='container'>
        <SectionTitle text='Eventos'/>
        <div className={css(style.venuesGrid)}>
          <div className={css(style.venuesGridItem)} >
            <div style={{padding: '0.5rem'}}>
              <img className={css(style.itemImg)} src={Grid1} />
              <div className={css(style.venueName)}>Volbeat</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div className={css(style.venuesGridItem)} >
            <div style={{padding: '0.5rem'}}>
              <img className={css(style.itemImg)} src={Grid2} />
              <div className={css(style.venueName)}>Metronomy</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div className={css(style.venuesGridItem, style.hide)} >
            <div style={{padding: '0.5rem'}}>
              <img className={css(style.itemImg)} src={Grid3} />
              <div className={css(style.venueName)}>Phil Collins</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div className={css(style.venuesGridItemFull)} >
            <div style={{padding: '0.5rem'}}>
              <img className={css(style.itemImg)} src={Grid4} />
              <div className={css(style.venueName)}>Lollapalooza Argentina 2018</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div className={css(style.venuesGridItemFull)}>
            <div style={{padding: '0.5rem'}}>
              <img className={css(style.itemImg)} src={Grid5} />
              <div className={css(style.venueName)}>Foo Fighters</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div className={css(style.venuesGridItemFull)}>
            <div style={{padding: '0.5rem'}}>
            <img className={css(style.venuesGridItemFull)} src={Grid6} />
            <div className={css(style.venueName)}>Phil Collins</div>
            <BorderGradient height='6px'/>
            </div>
          </div>
          <div className={css(style.venuesGridItem, style.hide)} >
            <div style={{padding: '0.5rem'}}>
              <img className={css(style.itemImg)} src={Grid7} />
              <div className={css(style.venueName)}>LCD Soundsystem</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div className={css(style.venuesGridItem, style.hide)} >
            <div style={{padding: '0.5rem'}}>
              <img className={css(style.itemImg)} src={Grid8} />
              <div className={css(style.venueName)}>Liam Gallagher</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div className={css(style.venuesGridItem, style.hide)} >
            <div style={{padding: '0.5rem'}}>
              <img className={css(style.itemImg)} src={Grid9} />
              <div className={css(style.venueName)}>Harry Styles</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const style = StyleSheet.create({
  venuesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    display: 'flex',
    justifyContent: 'space-between',
  },
  venuesGridItem: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '33%',
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
    "@media(max-width: 480px)": {
      display: 'none'
    }
  }
})
