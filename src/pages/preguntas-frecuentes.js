  
import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Link} from 'gatsby'



const PreguntasFrecuentas = () =>{

    return(
        <>
        <SEO title="Preguntas Frecuentas" />
        
        <Layout>
            <div className='mainContainerQuestion'>
                <div className='firstQuestion'>
                    <h1>Preguntas Frecuentes</h1>
                    <p>Estan son preguntas frecuentes que me hacen mis pacientes en las consultas.
                        <br/>
                       Si tienes alguna duda no dudes en consultarnos.
                       <br/>
                       <br/>
                       <Link style={{color:"#fff"}} to='/contacto'>Contacto</Link>
                    </p>
                    
                    <div className='animationQuestion'>
                        <img src="https://gestion.drgabrielrobledo.com/uploads/preguntas_frecuentes_861c5421a1.png" alt="preguntas frecuentes dr gabriel robledo"/>
                    </div>
                </div>
                <div className='secondQuestion'>
                    <div id='questionLeft'  className='questionContainer'>
                        <div>
                            <h2>¿Cómo se pueden prevenir las enfermedades del <strong>corazón?</strong></h2>
                        </div>
                        <div>
                            <p>Los cambios en el estilo de vida, adoptando <strong>hábitos cardiosaludables</strong>, pueden prevenir o tratar la enfermedad cardiovascular. En algunas personas estos cambios pueden ser el único tratamiento necesario, otros requieren medicamentos. Siempre debe ser valorado por su médico en caso de experimentar algún síntoma cardiovascular.</p>
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
                            <h2>¿Cuáles son los signos de alerta del <strong>ataque cardíaco?</strong> </h2>
                        </div>
                    </div>
                    <div id='questionRigth'  className='questionContainer'>
                        <div>
                            <h2>¿Qué rutinas diarias puedo adoptar para mantener un corazón sano?</h2>
                        </div>
                        <div>
                                <ul>
                                    <li>Alimentación equilibrada, factor escencial</li>
                                    <li>Control de nivel de <strong>glucosa en la sangre</strong></li>
                                    <li>Practicar deporte</li>
                                    <li>Controlar la depresión arterial</li>
                                    <li>Evitar el consumo de tabaco</li>
                                    <li>Mantener los niveles de <strong>colesterol</strong> dentro de los niveles aconsejados.</li> 
                                </ul> 
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default PreguntasFrecuentas