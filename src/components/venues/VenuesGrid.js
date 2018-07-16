import React, { Component } from 'react';
import { connect } from 'react-redux';

import SectionTitle from '../layout/SectionTitle';
import BorderGradient from '../layout/BorderGradient';


class VenuesGrid extends Component {
  componentDidMount(){
    console.log(this.props.venues)
  }
  render() {
    return (
      <div className='container'>
        <SectionTitle text='Venues'/>
        <div style={style.venuesGrid}>
        {
          this.props.venues.length &&
            this.props.venues.map((venue, index) => {
              return(
                <div style={style.venuesGridItem}>
                  <div style={{padding: '0.5rem'}} className='hover-shadow'>
                    <img style={style.itemImg} src={venue.img_principal} />
                    <div style={style.venueName}>{venue.nombre}</div>
                    <BorderGradient height='6px'/>
                  </div>
                </div>
              )
            })
        }
          <div style={style.venuesGridItem}>
            <div style={{padding: '0.5rem'}} className='hover-shadow'>
              <img style={style.itemImg} src={LunaPark} />
              <div style={style.venueName}>Luna Park</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItem}>
            <div style={{padding: '0.5rem'}} className='hover-shadow'>
              <img style={style.itemImg} src={DirecTV} />
              <div style={style.venueName}>DirecTV Arena</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItem}>
            <div style={{padding: '0.5rem'}} className='hover-shadow'>
              <img style={style.itemImg} src={Vorterix} />
              <div style={style.venueName}>Teatro Vorterix</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItem}>
            <div style={{padding: '0.5rem'}} className='hover-shadow'>
              <img style={style.itemImg} src={Hipodromo} />
              <div style={style.venueName}>Hipodromo de San Isidro</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItem}>
            <div style={{padding: '0.5rem'}} className='hover-shadow'>
              <img style={style.itemImg} src={Niceto} />
              <div style={style.venueName}>Niceto Club</div>
              <BorderGradient height='6px'/>
            </div>
          </div>
          <div style={style.venuesGridItem}>
            <div style={{padding: '0.5rem'}} className='hover-shadow'>
            <img style={style.itemImg} src={Velez} />
            <div style={style.venueName}>Estadio Velez</div>
            <BorderGradient height='6px'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>({
 venues: state.venues
})
const mapDispatchToProps = dispatch => ({
});
export default connect(mapStateToProps, mapDispatchToProps)(VenuesGrid);

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
  itemImg: {
    width: '100%',
    maxHeight: '23rem'
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
