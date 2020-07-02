import React, {useEffect} from 'react';
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import {  Link } from "gatsby"

//Icons 
import {LeftOutlined} from '@ant-design/icons'

//Gsap
import {TimelineMax, gsap , CSSPlugin , Power4} from 'gsap/all'
gsap.registerPlugin(CSSPlugin)


const MonitoreoDePresionArterial = () =>{

    const t1 = new TimelineMax({paused: true});
    useEffect(() => {
        t1.to(".backServicesPages", 0.7 , {width: "80vw", ease:  Power4.easeInOut},  "cross")
          .to(".backServicesPages > img", 0.5 ,  {opacity: 1})
          .to(".textServices", 0.5, { opacity: 1})
          .to(".firstServicesPages > a", 0.5 , {left : "10%",  opacity: 1, ease: Power4.easeInOut} ,"cross")
          .play()
    }, [])
    return(
        <>
            <SEO title="Monitoreo de presión arterial" />
            <Layout>
                <div className="mainContainerService">
                    <div className="firstServicesPages">
                        <div className='backServicesPages'>
                            <img src="../../servicios/MONITOREO-AMBULATORIO-DE-PRESION-ARTERIAL-DE-24-HORAS.jpg" alt="monitoreo de presión arterial bogotá colombia doctor gabriel robledo"/>
                            <div className='textServices'>
                                <h1>Monitoreo de presión arterial</h1>
                                <p> 
                                    El <strong>Monitoreo de presión arterial (MAPA)</strong> de 24 horas determina como se encuentra la Presión Arterial durante las horas de vigilia y especialmente en la horas nocturnas (de sueño) y establece el riesgo de un evento cardiovascular. Permite detectar la hipertensión nocturna, la cual, hoy en día se considera de mayor riesgo que la diurna.
                                </p>
                                <div className='buttonCita'>
                                    <Link to="/citas">Solicita tu cita!</Link>
                                </div>
                            </div>
                        </div>
                        <Link to="/servicios"><LeftOutlined/></Link>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default MonitoreoDePresionArterial