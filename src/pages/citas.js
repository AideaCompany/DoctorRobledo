import React, {useState, useEffect} from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'



//antd
import { Calendar } from 'antd';

//axios
import axios from 'axios'


const localeOptions = {
    "lang": {
      "locale": "es",
      "placeholder": "Selecciona una fecha",
      "rangePlaceholder": ["Fecha inicial", "Fecha Final"],
      "today": "Hoy",
      "now": "Ahora",
      "backToToday": "Regresar al día de hoy",
      "ok": "Aceptar",
      "clear": "Limpiar",
      "month": "Mes",
      "year": "Año",
      "timeSelect": "Selecciona la hora",
      "dateSelect": "Selecciona la fecha",
      "monthSelect": "Escoge un mes",
      "yearSelect": "Escoge un año",
      "decadeSelect": "Escoge una decada",
      "yearFormat": "YYYY",
      "dateFormat": "M/D/YYYY",
      "dayFormat": "D",
      "dateTimeFormat": "M/D/YYYY HH:mm:ss",
      "monthFormat": "MMMM",
      "monthBeforeYear": true,
      "previousMonth": "Mes anterior (PageUp)",
      "nextMonth": "Mes siguiente (PageDown)",
      "previousYear": "Año anterior (Control + left)",
      "nextYear": "Año siguiente (Control + right)",
      "previousDecade": "Decada anterior",
      "nextDecade": "Decada siguiente",
      "previousCentury": "Last century",
      "nextCentury": "Next century"
    },
    "timePickerLocale": {
      "placeholder": "Selecciona una hora"
    },
    "dateFormat": "YYYY-MM-DD",
    "dateTimeFormat": "YYYY-MM-DD HH:mm:ss",
    "weekFormat": "YYYY-wo",
    "monthFormat": "YYYY-MM"
  }
  

const Citas = () =>{
    // moment.locale('es')

    return(
        <>
            <SEO title='Solicitar Cita'></SEO>
            <Layout>
                <div className='mainContainerCitas'>
                    <div className="firstCitas">
                        <h1 className='chooseDay'>Escoge el día de tu cita </h1>
                        <div className='calendarDate'>
                            <Calendar locale={localeOptions} fullscreen={false}></Calendar>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )

}


export default Citas