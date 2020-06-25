import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import {  Link } from "gatsby"

//Lottie
import Lottie from 'react-lottie'
import animationSlider from '../components/animations/indexSlider/estetoscopio.json'

const Servicios = () =>{

    const defaultOptions = {
        loop: false,
        autoplay: true, 
        segments: true,
        animationData: animationSlider,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        },
    };

    return(
    <>
        <SEO title="Servicios" />
        <Layout>
            <div className='mainContainerService'>
                <div className="firstServices">
                    <h1>Servicios</h1>
                    <div className='backServices'></div>
                    <div className='serviceTarget' id="service1">
                        <div className='backServiceTarget'></div>
                        <img src="../servicios/CARDIOLOGIA.jpg" alt="servicios cardiologia doctor robledo kaiser "/>
                        <h1>CARDIOLOGÍA</h1>
                    </div>
                    <div className='serviceTarget' id="service2">
                        <div className='backServiceTarget'></div>   
                        <img src="../servicios/cardioncologia.jpg" alt="servicios cardio oncologia doctor robledo kaiser "/>
                        <h1>CARDIO-ONCOLOGÍA</h1>
                    </div>
                    <div className='serviceTarget' id="service3">
                        <div className='backServiceTarget'></div>
                        <img src="../servicios/electrocardiograma.jpg" alt="servicios electrocardiograma doctor robledo kaiser "/>
                        <h1>ELECTROCARDIOGRAMA</h1>
                    </div>
                    <div className='serviceTarget' id="service4">
                        <div className='backServiceTarget'></div>
                        <img src="../servicios/ECOCARDIOGRAMA.jpg" alt="servicios cardio oncologia doctor robledo kaiser "/>
                        <h1>ECOCARDIOGRAMA</h1>
                    </div>
                    <div className='serviceTarget' id="service5">
                        <div className='backServiceTarget'></div>
                        <img src="../servicios/ECOCARDIOGRAMA-CON-ESTRES-DE-EJERCICIO.jpg" alt="servicios ecocardriograma  doctor robledo kaiser "/>
                        <h1>ECOCARDIOGRAMA CON <br/> ESTRES DE EJERCICIO</h1>
                    </div>
                    <div className='serviceTarget' id="service6">
                        <div className='backServiceTarget'></div>
                        <img src="../servicios/PRUEBA-DE-ESFUERZO.jpg" alt="servicios prueba de esfuerzo doctor robledo kaiser "/>
                        <h1>PRUEBA DE ESFUERZO</h1>
                    </div>
                    <div className='serviceTarget' id="service7">
                        <div className='backServiceTarget'></div>
                        <img src="../servicios/TEST-DE-HOLTER--DE-24-HORAS.jpg" alt="servicios test de holter doctor robledo kaiser "/>
                        <h1>TEST DE HOLTER</h1>
                    </div>
                    <div className='serviceTarget' id="service8">
                        <div className='backServiceTarget'></div>
                        <img src="../servicios/MONITOREO-AMBULATORIO-DE-PRESION-ARTERIAL-DE-24-HORAS.jpg" alt="servicios monitoreo ambulatorio doctor robledo kaiser "/>
                        <h1>MONITOREO AMBULATORIO <br/>  DE PRESIÓN ARTERIAL </h1>
                    </div>
                    
                </div>
               
                {/* <div className='secondService'>
                    <div className='serviceItem ' id='serviceRight'>
                        <div className='imgService'>
                            <img src="../servicios/CARDIOLOGIA.jpg" alt="servicios cardiologia doctor robledo kaiser "/>
                            <h1>CARDIOLOGÍA</h1>
                        </div>
                        <p className='textService'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Autem nobis repellat inventore sequi provident? Quo fuga, earum
                            eveniet obcaecati quae placeat. Quis voluptatibus corrupti modi a, 
                            eaque quia temporibus qui!
                        </p>
                        <Link to='/citas'>Solicita tu cita!</Link>
                        
                    </div>
                    <div className='serviceItem' id='serviceLeft'>
                        <p className='textService'>
                        Cuando se tiene cáncer, es muy poca la información que conoces sobre tu tratamiento y los posibles efectos que tiene en órganos vitales como el corazón.
                        <br/>
                        <br/>
                        Por eso acá encontrarás especialistas que desean que te mejores en las mejores condiciones, si tienes cáncer, tienes antecedentes o eres paciente re incidente, consúltanos para hablar de los efectos adversos puede tener la quimioterapia en un órgano como el corazón.
                        </p>
                        <Link to='/citas'>Solicita tu cita!</Link>
                        <div className='imgService'>
                            <img src="../servicios/cardioncologia.jpg" alt="servicios cardio oncologia doctor robledo kaiser "/>
                            <h1>CARDIO-ONCOLOGÍA</h1>
                        </div>
                    </div>
                    <div className='serviceItem ' id='serviceRight'>
                        <div className='imgService'>
                            <img src="../servicios/electrocardiograma.jpg" alt="servicios electrocardiograma doctor robledo kaiser "/>
                            <h1>ELECTROCARDIOGRAMA</h1>
                        </div>
                        <p className='textService'>
                            El ECG (electrocardiograma) mide la actividad eléctrica del corazón.
                        </p>
                        <Link to='/citas'>Solicita tu cita!</Link>
                    </div>
                    <div className='serviceItem' id='serviceLeft'>
                        <p className='textService'>

                        Cuando se tiene cáncer, es muy poca la información que conoces sobre tu tratamiento y los posibles efectos que tiene en órganos vitales como el corazón.
                        <br/>
                        <br/>
                        Por eso acá encontrarás especialistas que desean que te mejores en las mejores condiciones, si tienes cáncer, tienes antecedentes o eres paciente re incidente, consúltanos para hablar de los efectos adversos puede tener la quimioterapia en un órgano como el corazón.
                        </p>
                        <Link to='/citas'>Solicita tu cita!</Link>
                        <div className='imgService'>
                            <img src="../servicios/ECOCARDIOGRAMA.jpg" alt="servicios cardio oncologia doctor robledo kaiser "/>
                            <h1>ECOCARDIOGRAMA</h1>
                        </div>
                    </div>
                    <div className='serviceItem' id='serviceRight'>
                        <p className='textService'>

                        Cuando se tiene cáncer, es muy poca la información que conoces sobre tu tratamiento y los posibles efectos que tiene en órganos vitales como el corazón.
                        <br/>
                        <br/>
                        Por eso acá encontrarás especialistas que desean que te mejores en las mejores condiciones, si tienes cáncer, tienes antecedentes o eres paciente re incidente, consúltanos para hablar de los efectos adversos puede tener la quimioterapia en un órgano como el corazón.
                        </p>
                        <Link to='/citas'>Solicita tu cita!</Link>
                        <div className='imgService'>
                            <img src="../servicios/ECOCARDIOGRAMA-CON-ESTRES-DE-EJERCICIO.jpg" alt="servicios cardio oncologia doctor robledo kaiser "/>
                            <h1>ECOCARDIOGRAMA CON <br/> ESTRES DE EJERCICIO</h1>
                        </div>
                    </div>
                    <div className='serviceItem' id='serviceLeft'>
                        <p className='textService'>

                        Cuando se tiene cáncer, es muy poca la información que conoces sobre tu tratamiento y los posibles efectos que tiene en órganos vitales como el corazón.
                        <br/>
                        <br/>
                        Por eso acá encontrarás especialistas que desean que te mejores en las mejores condiciones, si tienes cáncer, tienes antecedentes o eres paciente re incidente, consúltanos para hablar de los efectos adversos puede tener la quimioterapia en un órgano como el corazón.
                        </p>
                        <Link to='/citas'>Solicita tu cita!</Link>
                        <div className='imgService'>
                            <img src="../servicios/MONITOREO-AMBULATORIO-DE-PRESION-ARTERIAL-DE-24-HORAS.jpg" alt="servicios cardio oncologia doctor robledo kaiser "/>
                            <h1>MONITOREO AMBULATORIO <br/>  DE PRESIÓN ARTERIAL DE <br/> 24 HROAS </h1>
                        </div>
                    </div>
                    <div className='serviceItem' id='serviceRight'>
                        <p className='textService'>

                        Cuando se tiene cáncer, es muy poca la información que conoces sobre tu tratamiento y los posibles efectos que tiene en órganos vitales como el corazón.
                        <br/>
                        <br/>
                        Por eso acá encontrarás especialistas que desean que te mejores en las mejores condiciones, si tienes cáncer, tienes antecedentes o eres paciente re incidente, consúltanos para hablar de los efectos adversos puede tener la quimioterapia en un órgano como el corazón.
                        </p>
                        <Link to='/citas'>Solicita tu cita!</Link>
                        <div className='imgService'>
                            <img src="../servicios/PRUEBA-DE-ESFUERZO.jpg" alt="servicios cardio oncologia doctor robledo kaiser "/>
                            <h1>PRUEBA DE ESFUERZO</h1>
                        </div>
                    </div>
                    <div className='serviceItem' id='serviceLeft'>
                        <p className='textService'>
                            Este examen se utiliza para el estudio de arritmias (palpitaciones, taquicardias) que pueden contribuir al diagnóstico de la ECV.
                        </p>
                        <Link to='/citas'>Solicita tu cita!</Link>
                        <div className='imgService'>
                            <img src="../servicios/TEST-DE-HOLTER--DE-24-HORAS.jpg" alt="servicios cardio oncologia doctor robledo kaiser "/>
                            <h1>TEST DE HOLTER</h1>
                        </div>
                    </div>
                </div> */}
            </div>
        </Layout>
    </>
    )
}

export default Servicios