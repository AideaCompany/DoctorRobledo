import React, {useEffect} from 'react';
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import {  Link } from "gatsby"

//Icons 
import {LeftOutlined} from '@ant-design/icons'

//Gsap
import {TimelineMax, gsap , CSSPlugin , Power4} from 'gsap/all'
gsap.registerPlugin(CSSPlugin)


const RigidezArterial = (props) =>{

    console.log(props)

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
            <SEO title="Rigidez arterial" />
            <Layout>
                <div className="mainContainerService">
                    <div className="firstServicesPages">
                        <div className='backServicesPages'>
                            <img src="../../servicios/rigidez-arterial.jpg" alt="Rigidez arterial  bogotá colombia doctor gabriel robledo"/>
                            <div className='textServices'>
                                <h1>Rigidez Arterial</h1>
                                <p> 
                                    La <strong>Rigidez arterial</strong>, se valora con un tensiómetro especial que mide la velocidad de la onda de pulso, o sea de la sangre que sale del corazón a las arterias del cuerpo, y así conocer su rigidez, para determinar el riesgo de eventos cardiovasculares, en pacientes con factores de riesgo, y poder prescribir las acciones (control de factores de riesgo) y medicamentos que se puedan utilizar.
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

export default RigidezArterial