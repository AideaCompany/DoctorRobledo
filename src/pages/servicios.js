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
                    <h1>Estos son mis servicios</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing 
                        elit. Officiis necessitatibus architecto quas laudantium
                        fuga aliquam. Quae dolorem explicabo ducimus quis enim
                        harum doloribus doloremque nostrum, accusantium accusamus,
                        que molestias voluptas.</p>
                        <div className='animationService'>
                            <Lottie
                                options={defaultOptions}
                                width='90vw'
                                height='90vh'
                                />
                        </div>
                </div>
               
                <div className='secondService'>
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
                    </div>
                    <div className='serviceItem' id='serviceLeft'>
                        <p className='textService'>

                        Cuando se tiene cáncer, es muy poca la información que conoces sobre tu tratamiento y los posibles efectos que tiene en órganos vitales como el corazón.
                        <br/>
                        <br/>
                        Por eso acá encontrarás especialistas que desean que te mejores en las mejores condiciones, si tienes cáncer, tienes antecedentes o eres paciente re incidente, consúltanos para hablar de los efectos adversos puede tener la quimioterapia en un órgano como el corazón.
                        </p>
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
                    </div>
                    <div className='serviceItem' id='serviceLeft'>
                        <p className='textService'>

                        Cuando se tiene cáncer, es muy poca la información que conoces sobre tu tratamiento y los posibles efectos que tiene en órganos vitales como el corazón.
                        <br/>
                        <br/>
                        Por eso acá encontrarás especialistas que desean que te mejores en las mejores condiciones, si tienes cáncer, tienes antecedentes o eres paciente re incidente, consúltanos para hablar de los efectos adversos puede tener la quimioterapia en un órgano como el corazón.
                        </p>
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
                        <div className='imgService'>
                            <img src="../servicios/PRUEBA-DE-ESFUERZO.jpg" alt="servicios cardio oncologia doctor robledo kaiser "/>
                            <h1>PRUEBA DE ESFUERZO</h1>
                        </div>
                    </div>
                    <div className='serviceItem' id='serviceLeft'>
                        <p className='textService'>
                            Este examen se utiliza para el estudio de arritmias (palpitaciones, taquicardias) que pueden contribuir al diagnóstico de la ECV.
                        </p>
                        <div className='imgService'>
                            <img src="../servicios/TEST-DE-HOLTER--DE-24-HORAS.jpg" alt="servicios cardio oncologia doctor robledo kaiser "/>
                            <h1>TEST DE HOLTER</h1>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </>
    )
}

export default Servicios