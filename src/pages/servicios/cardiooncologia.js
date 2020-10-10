import React, {useEffect} from 'react';
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import {  Link } from "gatsby"
import marked from 'marked'

//Icons 
import {LeftOutlined} from '@ant-design/icons'

//Gsap
import {TimelineMax, gsap , CSSPlugin , Power4} from 'gsap/all'
gsap.registerPlugin(CSSPlugin)
const url = 'https://gestion.drgabrielrobledo.com';

const Cardiooncologia = ({data}) =>{
    const dataService = data.allStrapiPaginaServicios.edges[0].node.Servicios
    const getMarkdownText = ()=>{
        var rawMarkup = marked(dataService[3].descripcion, {sanitize : true})
        return rawMarkup
    }
    const t1 = new TimelineMax({paused: true});
    useEffect(() => {
        if (window.matchMedia("(max-width: 1024px) and (orientation : portrait)").matches) {
            t1.to(".backServicesPages", 0.7 , {width: "85vw", ease:  Power4.easeInOut},  "cross")
            .to(".backServicesPages > img", 0.5 ,  {opacity: 1})
            .to(".textServices", 0.5, { opacity: 1})
            .to(".firstServicesPages > a", 0.5 , {left : "10%",  opacity: 1, ease: Power4.easeInOut} ,"cross")
            .play()
        } else {
            t1.to(".backServicesPages", 0.7 , {width: "80vw", ease:  Power4.easeInOut},  "cross")
            .to(".backServicesPages > img", 0.5 ,  {opacity: 1})
            .to(".textServices", 0.5, { opacity: 1})
            .to(".firstServicesPages > a", 0.5 , {left : "10%",  opacity: 1, ease: Power4.easeInOut} ,"cross")
            .play()
        }
    }, [])
    return(
        <>
            <SEO title="Cardio Oncología" />
            <Layout>
                <div className="mainContainerService">
                    <div className="firstServicesPages">
                        <div className='backServicesPages'>
                            <img src={`${url}${dataService[3].imagen[0].url}`} alt="cardio oncologia bogotá colombia doctor gabriel robledo"/>
                            <div className='textServices'>
                                <h1>{dataService[3].titulo}</h1>
                                <div dangerouslySetInnerHTML={{__html:getMarkdownText()}}></div>
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

export default Cardiooncologia

export const IndexQuery = graphql`
  query{
    allStrapiPaginaServicios {
    edges {
      node {
        Servicios {
          titulo
          imagen {
            url
          }
          descripcion
        }
      }
    }
  }
  }
`