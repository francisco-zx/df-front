import React, { Component } from 'react';

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
        <div style={style.venuesGrid}>
          <div style={style.venuesGridItem} >
            <div style={{padding: '0.5rem'}}>
              <img style={style.itemImg} src={Grid1} />
              <div style={style.venueName}>Volbeat</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItem} >
            <div style={{padding: '0.5rem'}}>
              <img style={style.itemImg} src={Grid2} />
              <div style={style.venueName}>Metronomy</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItem} >
            <div style={{padding: '0.5rem'}}>
              <img style={style.itemImg} src={Grid3} />
              <div style={style.venueName}>Phil Collins</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItemFull} >
            <div style={{padding: '0.5rem'}}>
              <img style={style.itemImg} src={Grid4} />
              <div style={style.venueName}>Lollapalooza Argentina 2018</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItemFull}>
            <div style={{padding: '0.5rem'}}>
              <img style={style.itemImg} src={Grid5} />
              <div style={style.venueName}>Foo Fighters</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItemFull}>
            <div style={{padding: '0.5rem'}}>
            <img style={style.itemImg} src={Grid6} />
            <div style={style.venueName}>Phil Collins</div>
            <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItem} >
            <div style={{padding: '0.5rem'}}>
              <img style={style.itemImg} src={Grid7} />
              <div style={style.venueName}>LCD Soundsystem</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItem} >
            <div style={{padding: '0.5rem'}}>
              <img style={style.itemImg} src={Grid8} />
              <div style={style.venueName}>Liam Gallagher</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItem} >
            <div style={{padding: '0.5rem'}}>
              <img style={style.itemImg} src={Grid9} />
              <div style={style.venueName}>Harry Styles</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const style = {
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
    marginBottom: '2rem',
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

}
