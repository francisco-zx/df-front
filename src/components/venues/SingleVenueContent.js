import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import SingleVenueDetails from './SingleVenueDetails';
import SingleVenueEventsSlider from './SingleVenueEventsSlider';

export default class SingleVenueContent extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className={css(style.content)}>
            <article className={css(style.details) + ' animated fadeIn'}>
              <h3 className={css(style.subTitle)}>ACERCA DE</h3>
              <p className={css(style.description)}>
              Ubicado en el barrio de Colegiales. El teatro Vorterix es un hito local. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </p>
              <h3 className={css(style.subTitle)}>UBICACION</h3>
              <p className={css(style.description)}>
                Avenida Federico Lacroze 3455,
                Ciudad de Buenos Aires
              </p>
              <h3 className={css(style.subTitle)}>COMO LLEGAR</h3>
              <p className={css(style.description)}>
                Colectivo: 19  21 – 39 – 42 – 44 – 63 – 65 – 76 – 87 – 93 – 108 – 112 – 140 – 151 – 168 – 176 – 184
                Tren: Línea Mitre Ramal Retiro-José León Suárez est. Colegiales (a 7 cuadras) / Línea Urquiza (Metrovías) est. Federico Lacroze (a 6 cuadras)
                Subte: Línea B est. Federico Lacroze (a 6 cuadras)
              </p>
            </article>
            <article className={css(style.flyer)}>
              <SingleVenueDetails />
            </article>
          </div>
        </div>
        <SingleVenueEventsSlider />


      </div>

    );
  }
}
const style = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    "@media(max-width: 1024px)": {
      flexDirection: 'column',
    }
  },
  details: {
    display: 'flex',
    flex: 4,
    animationDelay: '0.4s',
    flexDirection: 'column',
    "@media(max-width: 1024px)": {
      flex: 1,
    }
  },
  flyer: {
    display: 'flex',
    flex: 2,
    height: 'auto',
    "@media(max-width: 1024px)": {
      flex: 1,
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
