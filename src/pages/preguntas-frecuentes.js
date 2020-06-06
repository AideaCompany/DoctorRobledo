  
import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'

//Lottie
import Lottie from 'react-lottie'
import animationSlider from '../components/animations/indexSlider/questions.json'


const PreguntasFrecuentas = () =>{


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
        <SEO title="Preguntas Frecuentas" />
        
        <Layout>
            <div className='mainContainerQuestion'>
                <div className='firstQuestion'>
                    <h1>Preguntas Frecuentes</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Esse voluptatem, magnam libero tempore excepturi dignissimos 
                        ducimus quam atque sapiente error expedita eius, nesciunt id 
                        exercitationem eaque? Et quibusdam molestiae accusamus!</p>
                        <div className='animationQuestion'>
                            <Lottie
                                options={defaultOptions}
                                width='90vw'
                                height='90vh'
                                />
                        </div>
                </div>
                <div className='secondQuestion'>
                    <div id='questionLeft'  className='questionContainer'>
                        <div>
                            <h1>¿Cómo se pueden prevenir las enfermedades del <strong>corazón?</strong></h1>
                        </div>
                        <div>
                            <p>Los cambios en el estilo de vida pueden prevenir o tratar la enfermedad cardiovascular. 
                                En algunas personas estos cambios pueden ser el único tratamiento necesario, otros 
                                requieren medicamentos. Siempre debe ser valorado por su  médico.</p>
                        </div>
                    </div>
                    <div id='questionRigth'  className='questionContainer'>
                        <div>
                            <ul>
                                <li>Dolor o molestias en el pecho (presión que causa incomodidad)</li>
                                <li>Opresión</li>
                                <li>Dolor en el centro del pecho que puede ser leve o intenso, el cual generalmente se irradia hacia el brazo izquierdo</li>
                                <li>Vómito</li>
                                <li>Náuseas, mareos</li>
                                <li>Sensación de muerte inminente</li>
                                <li>Cualquier persona que tenga estos síntomas debe consultar a su médico o a urgencias de una clínica u hospital.</li>
                            </ul> 
                        </div>
                        <div>
                            <h1>¿Cuáles son los signos de alerta del <strong>ataque cardíaco?</strong> </h1>
                        </div>
                    </div>
                    <div id='questionRigth'  className='questionContainer'>
                        <div>
                            <h1>¿Si soy mujer tengo más riesgo de sufrir un <strong>infarto</strong>?</h1>
                        </div>
                        <div>
                            <div>
                                <p>
                                    Las mujeres tienen mayor riesgo de infartos que los hombres al llegar a la menopausia. 
                                    La enfermedad coronaria mata más mujeres que cualquier cáncer u otras enfermedades.
                                    <br/>
                                    Si usted tiene colesterol elevado, antecedentes familiares de infartos en la familia, hipertensión arterial, 
                                    es sedentaria, fuma, y tiene sobrepeso o es obesa…y llegó a la menopausia…su riesgo es elevado de tener un 
                                    evento cardiovascular.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default PreguntasFrecuentas