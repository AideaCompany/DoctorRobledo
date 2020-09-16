import React, {useEffect} from 'react';
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import {  Link } from "gatsby"

//Icons 
import {LeftOutlined} from '@ant-design/icons'

//Gsap
import {TimelineMax, gsap , CSSPlugin , Power4} from 'gsap/all'
gsap.registerPlugin(CSSPlugin)


const RehabilitaciónCardiaca = () =>{

    const t1 = new TimelineMax({paused: true});
    useEffect(() => {
        if (window.matchMedia("(max-width: 1024px) and (orientation : portrait)").matches) {
            t1.to(".backServicesPages", 0.7 , {width: "85vw", ease:  Power4.easeInOut},  "cross")
            .to(".backServicesPages > img", 0.5 ,  {opacity: 1})
            .to(".textServices", 0.5, { opacity: 1})
            .to(".firstServicesPages > a", 0.5 , {left : "10%",  opacity: 1, ease: Power4.easeInOut} ,"cross")
            .play()
        } else {
            t1.to(".backServicesPages", 0.7 , {width: "80vw", ease:  Power4.easeInOut},  "cross")
            .to(".backServicesPages > img", 0.5 ,  {opacity: 1})
            .to(".textServices", 0.5, { opacity: 1})
            .to(".firstServicesPages > a", 0.5 , {left : "10%",  opacity: 1, ease: Power4.easeInOut} ,"cross")
            .play()
        }
    }, [])
    return(
        <>
            <SEO title="Rehabilitación cardiaca" />
            <Layout>
                <div className="mainContainerService">
                    <div className="firstServicesPages">
                        <div className='backServicesPages'>
                            <img src="../../servicios/rehabilitacion-cardiaca.jpg" alt="rehabilitación cardiaca bogotá colombia doctor gabriel robledo"/>
                            <div className='textServices'>
                                <h1>Rehabilitación  Cardiaca</h1>
                                <p> 
                                La <strong>rehabilitación cardíaca</strong>, es una disciplina que cada día toma auge, 
                                por su contribución en la disminución de las tasas de morbi mortalidad 
                                del paciente cardiovascular. Combina la actividad física con programas 
                                educativos sobre los factores de riesgo de la enfermedad coronaria 
                                (tabaquismo, obesidad, hipertensión, stress) que le permiten al 
                                paciente un ajuste físico, sicológico y social posteriores a su enfermedad coronaria.
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

export default RehabilitaciónCardiaca