import React, {useEffect} from 'react';
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import {  Link } from "gatsby"

//Icons 
import {LeftOutlined} from '@ant-design/icons'

//Gsap
import {TimelineMax, gsap , CSSPlugin , Power4} from 'gsap/all'
gsap.registerPlugin(CSSPlugin)


const Electrocardiograma = () =>{

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
            <SEO title="Electrocardiograma" />
            <Layout>
                <div className="mainContainerService">
                    <div className="firstServicesPages">
                        <div className='backServicesPages'>
                            <img src="../../servicios/electrocardiograma.jpg" alt="electrocardiograma bogotá colombia doctor gabriel robledo"/>
                            <div className='textServices'>
                                <h1>Electrocardiograma </h1>
                                <p> 
                                    El <strong>ECG (electrocardiograma) </strong>mide la actividad eléctrica del corazón.
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

export default Electrocardiograma