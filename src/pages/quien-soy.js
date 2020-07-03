import React, {useState, useEffect , useRef} from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql , Link } from "gatsby"


const QuienSoy = () =>{
   
    
    return(
        <>
        <SEO title="¿Quién soy?" />
        <Layout>
           <div className='mainContainerAbout'>
             <div className='firstAbout'>
                <div className="firstBack">
                  <img src="https://gestion.drgabrielrobledo.com/uploads/doctor-1149149_1920_33bbc39896.jpeg" alt="doctor gabriel robledo"/>
                </div>
                <div className="back2About"></div>
                <div className="back3About"></div>
                <h1>¿Quién Soy?</h1>
                <div className='backText'></div>
                <div className='textAbout'>
                  <p>
                    Soy el <strong>Dr. Gabriel Robledo Kaiser</strong>  nací el 27 de septiembre de 1950 en Bogotá. 
                    <br/>
                    Cuento con más de 40 años de experiencia siendo un reconocido especialista en <strong>Cardiología y Cardio-Oncología.</strong>
                  </p>
                  <p>
                    Realizé mis estudios de medicina en la <strong>Pontificia Universidad Javeriana</strong>, en donde obtiene su título de Médico Cirujano 
                    en el año de 1977. Posteriormente realizé una residencia en Medicina Interna y Cardiología 
                    en la Escuela Colombiana de Medicina Clínica SHAIO.
                  </p>
                  <p>
                    Años más tarde viajé a los Estados Unidos, en donde realicé estudios de post-grado en el Saint Barnabas Medical Center en Denville, New Jersey.
                  </p>
                  <p>
                    En el año de 1987 fundé el <strong>Centro Cardiológico</strong> de Bogotá donde actualmente soy director y donde brindo consulta especializada.
                  </p>
                  <p>
                    Entre mis logros más notorios se encuentra ser Director de la Unidad de Cardio-Oncología 
                    del Country y Presidente de la Fundación Precardia. Me ha desempeñado como Cardiólogo del 
                    Instituto Nacional de Cancerología; Instructor de Cardiología del Hospital Universitario 
                    de La Samaritana; Asesor Médico en Cardiología de la Asociación Colombiana de Facultades 
                    de Medicina ASCOFAME; Presidente de la AEFAS; y Coordinador del Comité de Hipertensión 
                    Arterial de la Sociedad Colombiana de Cardiología, entre otros. Permanesco como asesor 
                    médico de varios Laboratorios Farmacéuticos, e instructor certificado por la Asociación 
                    Americana del Corazón en BLS, ACLS.  
                  </p>
                  <p>
                    Galardonado como uno de los 50 mejores médicos de Colombia en los Top Doctors Awards 2018.
                  </p>
                </div>

             </div>
           </div>   
        </Layout>
        </>
    )
}

export default QuienSoy
