import React, { Component } from 'react';

import SingleBlogDetails from './SingleBlogDetails';

export default class SingleEventInfo extends Component {
  render() {
    return (
      <div className='container'>
        <article style={style.details}>
          <h3 style={style.subTitle}>Edición otoño-invierno</h3>
          <p style={style.description}>
          Durante la semana del 1 al 7 de marzo se desarrollará una nueva edición de BAFWEEK, que tiene como principal objetivo apoyar y potenciar la moda argentina para instalarla en el calendario internacional. En diferentes locaciones de Buenos Aires se presentarán las colecciones Otoño Invierno 2018 de marcas comerciales líderes, diseñadores consagrados y los talentos emergentes de la moda.
          Presentado por Alto Palermo, el evento es realizado por IRSA Propiedades Comerciales, LA RURAL S.A. y DF Entertainment, productora líder en entretenimiento que aportará todo su know-how en grandes producciones. Cuenta además con el apoyo del Gobierno de la Ciudad, consciente de la importancia que tiene la moda como generadora de empleos en Buenos Aires.
          </p>
          <h3 style={style.subTitle}>DESFILES SATeLITALES</h3>
          <p style={style.description}>
            En esta edición BAFWEEK comienza una mirada itinerante con desfiles en diferentes locaciones de la ciudad y el Pabellón Frers de La Rural, serán los escenarios de las nuevas pasarelas.
            ¿La grilla de Bafweek? Rapsodia, Mishka, Mis Íntimos Amigos, Mila Kartei, House of Matching Colours, Alen, Jazmín Chebar y Ay Not Dead.
            Dentro de los emergentes y tomando BAFWEEK como una usina de nuevos talentos están los diseñadores Emergentes y Consagrados de la Dirección General de Industrias Creativas del Gobierno de la Ciudad de Buenos Aires.
          </p>
          <h3 style={style.subTitle}>ENTRADA LIBRE</h3>
          <p style={style.description}>
            La entrada al predio BAFWEEK es gratuita, pero la asistencia a los desfiles es con invitación por parte de las diferentes firmas que participan en el evento o hasta agotar la capacidad de la sala.
            En esta edición BAFWEEK comienza una mirada itinerante con desfiles en diferentes locaciones de la ciudad y el Pabellón Frers de La Rural, serán los escenarios de las nuevas pasarelas.
            Dentro de los emergentes y tomando BAFWEEK como una usina de nuevos talentos están los diseñadores Emergentes y Consagrados de la Dirección General de Industrias Creativas del Gobierno de la Ciudad de Buenos Aires.
            Presentado por Alto Palermo, el evento es realizado por IRSA Propiedades Comerciales, LA RURAL S.A. y DF Entertainment, productora líder en entretenimiento que aportará todo su know-how en grandes producciones. Cuenta además con el apoyo del Gobierno de la Ciudad, consciente de la importancia
          </p>
        </article>
        <article style={style.flyer}>
          <SingleBlogDetails />
        </article>
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
