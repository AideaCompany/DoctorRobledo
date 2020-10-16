  
import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Link} from 'gatsby'

import marked from 'marked'



const PreguntasFrecuentas = ({data}) =>{

    const url = 'https://gestion.drgabrielrobledo.com';
    const dataPreguntas = data.allStrapiPreguntasFrecuentes.nodes[0]

    const getMarkdownText = (parameter)=>{
        var rawMarkup = marked(parameter, {sanitize : true})
        return rawMarkup
    }

    return(
        <>
        <SEO title="Preguntas Frecuentas" />
        
        <Layout>
            <div className='mainContainerQuestion'>
                <div className='firstQuestion'>
                    <div className='textQuestionInit'>
                        <div className='title'>
                            <h1>Preguntas Frecuentes</h1>
                        </div>
                        <div className='textQuestion'>
                            <div dangerouslySetInnerHTML={{__html : getMarkdownText(dataPreguntas.texto_introduccion)}}></div>
                        </div>
                        <div className='linkContact'>
                            <Link style={{color:"#fff"}} to='/contacto'>Contacto</Link>
                        </div>
                    </div>
                    <div className='animationQuestion'>
                        <img src={`${url}${dataPreguntas.imagen[0].url}`} alt="preguntas frecuentes dr gabriel robledo"/>
                    </div>
                </div>
                <div className='secondQuestion'>
                    {dataPreguntas.preguntas_frecuentes.map(pregunta=>(
                    <div  className='questionContainer'>
                        <div>
                            <h2>{pregunta.pregunta}</h2>
                        </div>
                        <div>
                            <div className='textQuestion' dangerouslySetInnerHTML={{__html:getMarkdownText(pregunta.respuesta)}}></div>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </Layout>
        </>
    )
}

export default PreguntasFrecuentas

export const IndexQuery = graphql`
  query{
    allStrapiPreguntasFrecuentes {
    nodes {
      imagen {
        url
      }
      texto_introduccion
      preguntas_frecuentes {
        pregunta
        respuesta
      }
    }
  }
  }
`