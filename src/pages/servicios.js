import React, {useEffect, useState} from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import {  Link } from "gatsby"

//Gsap
import {TimelineMax, gsap , CSSPlugin , Power4} from 'gsap/all'
gsap.registerPlugin(CSSPlugin)

const Servicios = () =>{

    const t1 = new TimelineMax({paused: true});

    useEffect(() => {
        
        if (window.matchMedia("(max-width: 1024px) and (orientation : portrait)").matches) {
            t1.to(".backServices", 0.5 , {width: "80vw", ease:  Power4.easeInOut})
            .to(".firstServices > h1", 0.5 ,  {opacity: 1})
            .to(["#service1","#service2"], 0.7, {top:"17%" , opacity: "1" , ease: Power4.easeInOut}, "cross")
            .to(["#service3","#service4"], 0.7, {top:"34%" , opacity: "1" , ease: Power4.easeInOut}, "cross")
            .to(["#service5","#service6"], 0.7, {top:"51%" , opacity: "1" , ease: Power4.easeInOut}, "cross")
            .to(["#service7","#service8"], 0.7, {top:"68%" , opacity: "1" , ease: Power4.easeInOut}, "cross")
            .to(["#service9","#service10"], 0.7, {top:"85%" , opacity: "1" , ease: Power4.easeInOut}, "cross")
            .play()
        }else{
            t1.to(".backServices", 0.5 , {width: "80vw", ease:  Power4.easeInOut})
            .to(".firstServices > h1", 0.5 ,  {opacity: 1})
            .to(["#service1","#service2", "#service3", "#service4", "#service5"], 0.7, {top:"20%" , opacity: "1" , ease: Power4.easeInOut}, "cross")
            .to(["#service6","#service7", "#service8", "#service9", "#service10"], 0.7, {top:"60%" , opacity: "1" , ease: Power4.easeInOut}, "cross")
            .play()
        }
        
    }, [])


    return(
    <>
        <SEO title="Servicios" />
        <Layout>
            <div className='mainContainerService'>
                <div className="firstServices">
                    <h1>Servicios</h1>
                    <div className='backServices'></div>
                    <Link to="/servicios/contrapulsacion" className='serviceTarget' id="service1">
                        <div className='backServiceTarget' id="backServiceTarget1"></div>
                        <img src="../servicios/contrapulsacion.jpg" alt="servicios ccontrapulsación externa bogotá colombia doctor robledo kaiser "/>
                        <h1>CONTRAPULSAIÓN <br/> EXTERNA</h1>
                    </Link>
                    <Link to="/servicios/rigidez-arterial" className='serviceTarget' id="service2">
                        <div className='backServiceTarget' id="backServiceTarget2"></div>
                        <img src="../servicios/rigidez-arterial.jpg" alt="servicios rigidez arterial bogotá colombia doctor robledo kaiser "/>
                        <h1>RIGIDEZ ARTERIAL</h1>
                    </Link>
                    <Link to="/servicios/cardiologia" className='serviceTarget' id="service3">
                        <div className='backServiceTarget' id="backServiceTarget3"></div>
                        <img src="../servicios/CARDIOLOGIA.jpg" alt="servicios cardiologia bogotá colombia doctor robledo kaiser "/>
                        <h1>CARDIOLOGÍA</h1>
                    </Link>
                    <Link to="/servicios/cardiooncologia" className='serviceTarget' id="service4">
                        <div className='backServiceTarget' id="backServiceTarget4"></div>   
                        <img src="../servicios/cardioncologia.jpg" alt="servicios cardio bogotá colombia oncologia doctor robledo kaiser "/>
                        <h1>CARDIO ONCOLOGÍA</h1>
                    </Link>
                    <Link to="/servicios/electrocardiograma"  className='serviceTarget' id="service5">
                        <div className='backServiceTarget' id="backServiceTarget5"></div>
                        <img src="../servicios/electrocardiograma.jpg" alt="servicios bogotá colombia electrocardiograma doctor robledo kaiser "/>
                        <h1>ELECTROCARDIOGRAMA</h1>
                    </Link>
                    <Link to="/servicios/ecocardiograma"  className='serviceTarget' id="service6">
                        <div className='backServiceTarget' id="backServiceTarget6"></div>
                        <img src="../servicios/ECOCARDIOGRAMA.jpg" alt="servicios cardio  oncologia bogotá colombia doctor robledo kaiser "/>
                        <h1>ECOCARDIOGRAMA</h1>
                    </Link>
                    <Link to="/servicios/rehabilitacion-cardiaca" className='serviceTarget' id="service7">
                        <div className='backServiceTarget' id="backServiceTarget7"></div>
                        <img src="../servicios/rehabilitacion-cardiaca.jpg" alt="servicios ecocardriograma bogotá colombia  doctor robledo kaiser "/>
                        <h1>REHABILITACIÓN CARDIACA</h1>
                    </Link>
                    <Link to="/servicios/prueba-de-esfuerzo" className='serviceTarget' id="service8">
                        <div className='backServiceTarget' id="backServiceTarget8"></div>
                        <img src="../servicios/PRUEBA-DE-ESFUERZO.jpg" alt="servicios prueba de esfuerzo bogotá colombia doctor robledo kaiser "/>
                        <h1>PRUEBA DE ESFUERZO</h1>
                    </Link>
                    <Link to="/servicios/test-de-holter"  className='serviceTarget' id="service9">
                        <div className='backServiceTarget' id="backServiceTarget9"></div>
                        <img src="../servicios/TEST-DE-HOLTER--DE-24-HORAS.jpg" alt="servicios test de holter bogotá colombia doctor robledo kaiser "/>
                        <h1>TEST DE HOLTER</h1>
                    </Link>
                    <Link to="/servicios/monitoreo-de-presion-arterial"  className='serviceTarget' id="service10">
                        <div className='backServiceTarget' id="backServiceTarget10"></div>
                        <img src="../servicios/MONITOREO-AMBULATORIO-DE-PRESION-ARTERIAL-DE-24-HORAS.jpg" alt="servicios monitoreo ambulatorio bogotá colombia  doctor robledo kaiser "/>
                        <h1>MONITOREO DE PRESIÓN ARTERIAL </h1>
                    </Link>
                    
                </div>
            </div>
        </Layout>
    </>
    )
}

export default Servicios