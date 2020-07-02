import React, {useEffect} from 'react';
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import {  Link } from "gatsby"

//Icons 
import {LeftOutlined} from '@ant-design/icons'

//Gsap
import {TimelineMax, gsap , CSSPlugin , Power4} from 'gsap/all'
gsap.registerPlugin(CSSPlugin)


const Contrapulsacion = () =>{

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
            <SEO title="Contrapulsación externa" />
            <Layout>
                <div className="mainContainerService">
                    <div className="firstServicesPages">
                        <div className='backServicesPages'>
                            <img src="../../servicios/contrapulsacion.jpg" alt="contrapulsacion externa bogotá colombia doctor gabriel robledo"/>
                            <div className='textServices'>
                                <h1>Contrapulsación externa</h1>
                                <p> 
                                    La <strong>Contrapulsación Externa </strong>Sincronizada del corazón es el método no invasivos mas útil en el tratamiento de la enfermedad coronaria y relacionadas con la circulació́n. Los sistemas de Contrapulsación externa sincronizados son dispositivos médicos no invasivos, para el tratamiento de pacientes que sufren de enfermedad coronaria. 
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

export default Contrapulsacion