import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import marked from 'marked'


const url = 'https://gestion.drgabrielrobledo.com';
const QuienSoy = ({data}) =>{
   
  const dataAbout = data.allStrapiPaginaQuienSoy.edges[0].node

  const getMarkdownText = ()=>{
    var rawMarkup = marked(dataAbout.texto, {sanitize : true})
    return rawMarkup
}

    
    return(
        <>
        <SEO title="¿Quién soy?" />
        <Layout>
           <div className='mainContainerAbout'>
             <div className='firstAbout'>
                <div className="firstBack">
                  <img src={`${url}${dataAbout.Foto[0].url}`} alt="doctor gabriel robledo"/>
                </div>
                <div className="back2About"></div>
                <div className="back3About"></div>
                <h1>¿Quién Soy?</h1>
                <div className='backText'></div>
                <div dangerouslySetInnerHTML={{__html:getMarkdownText()}} className='textAbout'>

                </div>

             </div>
           </div>   
        </Layout>
        </>
    )
}

export default QuienSoy

export const IndexQuery = graphql`
  query{
    allStrapiPaginaQuienSoy {
    edges {
      node {
        Foto {
          url
        }
        Titulo
        texto
      }
    }
  }
  }
`
