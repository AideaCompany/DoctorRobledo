import React, {useEffect} from 'react';
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import {  Link } from "gatsby"

//Icons 
import {LeftOutlined} from '@ant-design/icons'

//Gsap
import {TimelineMax, gsap , CSSPlugin , Power4} from 'gsap/all'
gsap.registerPlugin(CSSPlugin)


const PruebaDeEsfuerzo = () =>{

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
            <SEO title="Prueba de esfuerzo" />
            <Layout>
                <div className="mainContainerService">
                    <div className="firstServicesPages">
                        <div className='backServicesPages'>
                            <img src="../../servicios/PRUEBA-DE-ESFUERZO.jpg" alt="prueba de esfuerzo bogotá colombia doctor gabriel robledo"/>
                            <div className='textServices'>
                                <h1>Prueba de esfuerzo</h1>
                                <p> 
                                    <strong>La prueba de esfuerzo </strong> 
                                    determina la clase funcional de un individuo y permite conocer 
                                    si existe o se sospecha de una enfermedad coronaria activa, 
                                    así como la valoración de la capacidad de realizar un ejercicio, 
                                    de acuerdo a parámetros establecidos según la edad de la persona.
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

export default PruebaDeEsfuerzo