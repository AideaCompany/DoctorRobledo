import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'



const QuienSoy = () =>{
   
    
    return(
        <>
        <SEO title="¿Quién soy?" />
        <Layout>
           <div className='mainContainerAbout'>
             <div className='firstAbout'>
                <div className="firstBack">
                  <img src="https://gestion.drgabrielrobledo.com/uploads/whoiam_9318cc4029.png" alt="doctor gabriel robledo"/>
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
                    en el año de 1977. Posteriormente, viajé a los Estados Unidos, en donde realicé algunos estudios y pasantías en el <strong>Saint Barnabas Medical Center </strong>en Denville, New Jersey. 
                  </p>
                  <p>
                    Al regresar a Colombia, hice mi especialidad en <strong>Medicina Interna y Cardiología</strong> en <strong>la Escuela Colombiana de Medicina, y Clínica SHAIO.</strong>
                  </p>
                  <p>
                    En el año de 1987 fundé el <strong>Centro Cardiológico</strong> de Bogotá donde actualmente soy director y donde brindo consulta especializada.
                  </p>
                  <p>
                    Entre mis logros más notorios se encuentra ser Director de la Unidad de <strong> Cardio-Oncología del Country y Presidente de la Fundación Precardia. <br/>
                     </strong>Me ha desempeñado como <strong>Cardiólogo </strong>del Instituto Nacional de Cancerología. <br/><strong> Instructor de Cardiología </strong>del Hospital Universitario de La Samaritana.<br/><strong> Asesor Médico en Cardiología </strong>de la Asociación Colombiana de Facultades de Medicina ASCOFAME. <br/><strong> Presidente </strong>de  AEFAS Asociación de egresados de la Fundación Abood Shaio. <br/><strong> Coordinador </strong>del Comité de Hipertensión Arterial de la Sociedad Colombiana de Cardiología.
                  </p>
                  <p>
                    En la actualidad soy <strong>Presidente de la Asociación Colombiana de Obesidad (FUNCOBES)</strong>, <strong>asesor médico </strong>de varios Laboratorios Farmacéuticos, e <strong> instructor certificado </strong>por la Asociación Americana del Corazón en BLS, ACLS.
                  </p>
                  <p>
                    Soy Miembro de la <strong> Sociedad Europea de Cardiología.</strong> 
                  </p>
                  <p>
                    Galardonado como uno de los <strong>50 mejores médicos de Colombia</strong>en los Top Doctors Awards 2018.
                  </p>
                </div>

             </div>
           </div>   
        </Layout>
        </>
    )
}

export default QuienSoy
