import React, { Component } from 'react';

import SingleVenueDetails from './SingleVenueDetails';
import SingleVenueEventsSlider from './SingleVenueEventsSlider';

export default class SingleVenueContent extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <article style={style.details}>
            <h3 style={style.subTitle}>ACERCA DE</h3>
            <p style={style.description}>
            Ubicado en el barrio de Colegiales. El teatro Vorterix es un hito local. Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            </p>
            <h3 style={style.subTitle}>UBICACION</h3>
            <p style={style.description}>
              Avenida Federico Lacroze 3455,
              Ciudad de Buenos Aires
            </p>
            <h3 style={style.subTitle}>COMO LLEGAR</h3>
            <p style={style.description}>
              Colectivo: 19  21 – 39 – 42 – 44 – 63 – 65 – 76 – 87 – 93 – 108 – 112 – 140 – 151 – 168 – 176 – 184
              Tren: Línea Mitre Ramal Retiro-José León Suárez est. Colegiales (a 7 cuadras) / Línea Urquiza (Metrovías) est. Federico Lacroze (a 6 cuadras)
              Subte: Línea B est. Federico Lacroze (a 6 cuadras)
            </p>
          </article>
          <article style={style.flyer}>
            <SingleVenueDetails />
          </article>
        </div>
        <SingleVenueEventsSlider />
      </div>

    );
  }
}
const style = {
  details: {
    width: '65%',
    display: 'inline-block'
  },
  flyer: {
    width: '35%',
    display: 'inline-block'
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
  }
}
