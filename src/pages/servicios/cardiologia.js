import React, {useEffect} from 'react';
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import {  Link } from "gatsby"

//Icons 
import {LeftOutlined} from '@ant-design/icons'

//Gsap
import {TimelineMax, gsap , CSSPlugin , Power4} from 'gsap/all'
gsap.registerPlugin(CSSPlugin)


const Cardiologia = () =>{

    const t1 = new TimelineMax({paused: true});
    useEffect(() => {
        if (window.matchMedia("(max-width: 1024px) and (orientation : portrait)").matches) {
            t1.to(".backServicesPages", 0.7 , {width: "90vw", ease:  Power4.easeInOut},  "cross")
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
            <SEO title="Cardiología" />
            <Layout>
                <div className="mainContainerService">
                    <div className="firstServicesPages">
                        <div className='backServicesPages'>
                            <img src="../../servicios/CARDIOLOGIA.jpg" alt="cargiologia doctor gabriel robledo"/>
                            <div className='textServices'>
                                <h1>Cardiología</h1>
                                <p>Es la rama de la medicina encargada del estudio, diagnóstico y tratamiento de las enfermedades delcorazón y del aparato circulatorio Consulta especializada en todas las enfermedades propias del corazón</p>
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

export default Cardiologia