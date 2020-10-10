import React, {useEffect, useState} from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import {  Link } from "gatsby"

//Gsap
import {TimelineMax, gsap , CSSPlugin , Power4} from 'gsap/all'
gsap.registerPlugin(CSSPlugin)

const url = 'https://gestion.drgabrielrobledo.com';
const Servicios = ({data}) =>{

    const [dataService, setDataService] = useState([])
    const t1 = new TimelineMax({paused: true});
    console.log(dataService)
    useEffect(() => {
        setDataService(data.allStrapiPaginaServicios.edges[0].node.Servicios)
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
                        <img src={`${url}${dataService[0]?.imagen[0]?.url}`} alt="servicios ccontrapulsación externa bogotá colombia doctor robledo kaiser "/>
                        <h1>{dataService[0]?.titulo?.toUpperCase()}</h1>
                    </Link>
                    <Link to="/servicios/rigidez-arterial" className='serviceTarget' id="service2">
                        <div className='backServiceTarget' id="backServiceTarget2"></div>
                        <img src={`${url}${dataService[1]?.imagen[0]?.url}`} alt="servicios rigidez arterial bogotá colombia doctor robledo kaiser "/>
                        <h1>{dataService[1]?.titulo?.toUpperCase()}</h1>
                    </Link>
                    <Link to="/servicios/cardiologia" className='serviceTarget' id="service3">
                        <div className='backServiceTarget' id="backServiceTarget3"></div>
                        <img src={`${url}${dataService[2]?.imagen[0]?.url}`} alt="servicios cardiologia bogotá colombia doctor robledo kaiser "/>
                        <h1>{dataService[2]?.titulo?.toUpperCase()}</h1>
                    </Link>
                    <Link to="/servicios/cardiooncologia" className='serviceTarget' id="service4">
                        <div className='backServiceTarget' id="backServiceTarget4"></div>   
                        <img src={`${url}${dataService[3]?.imagen[0]?.url}`} alt="servicios cardio bogotá colombia oncologia doctor robledo kaiser "/>
                        <h1>{dataService[3]?.titulo?.toUpperCase()}</h1>
                    </Link>
                    <Link to="/servicios/electrocardiograma"  className='serviceTarget' id="service5">
                        <div className='backServiceTarget' id="backServiceTarget5"></div>
                        <img src={`${url}${dataService[4]?.imagen[0]?.url}`} alt="servicios bogotá colombia electrocardiograma doctor robledo kaiser "/>
                        <h1>{dataService[4]?.titulo?.toUpperCase()}</h1>
                    </Link>
                    <Link to="/servicios/ecocardiograma"  className='serviceTarget' id="service6">
                        <div className='backServiceTarget' id="backServiceTarget6"></div>
                        <img src={`${url}${dataService[5]?.imagen[0]?.url}`} alt="servicios cardio  oncologia bogotá colombia doctor robledo kaiser "/>
                        <h1>{dataService[5]?.titulo?.toUpperCase()}</h1>
                    </Link>
                    <Link to="/servicios/rehabilitacion-cardiaca" className='serviceTarget' id="service7">
                        <div className='backServiceTarget' id="backServiceTarget7"></div>
                        <img src={`${url}${dataService[6]?.imagen[0]?.url}`} alt="servicios ecocardriograma bogotá colombia  doctor robledo kaiser "/>
                        <h1>{dataService[6]?.titulo?.toUpperCase()}</h1>
                    </Link>
                    <Link to="/servicios/prueba-de-esfuerzo" className='serviceTarget' id="service8">
                        <div className='backServiceTarget' id="backServiceTarget8"></div>
                        <img src={`${url}${dataService[7]?.imagen[0]?.url}`} alt="servicios prueba de esfuerzo bogotá colombia doctor robledo kaiser "/>
                        <h1>{dataService[7]?.titulo?.toUpperCase()}</h1>
                    </Link>
                    <Link to="/servicios/test-de-holter"  className='serviceTarget' id="service9">
                        <div className='backServiceTarget' id="backServiceTarget9"></div>
                        <img src={`${url}${dataService[8]?.imagen[0]?.url}`} alt="servicios test de holter bogotá colombia doctor robledo kaiser "/>
                        <h1>{dataService[8]?.titulo?.toUpperCase()}</h1>
                    </Link>
                    <Link to="/servicios/monitoreo-de-presion-arterial"  className='serviceTarget' id="service10">
                        <div className='backServiceTarget' id="backServiceTarget10"></div>
                        <img src={`${url}${dataService[9]?.imagen[0]?.url}`} alt="servicios monitoreo ambulatorio bogotá colombia  doctor robledo kaiser "/>
                        <h1>{dataService[9]?.titulo?.toUpperCase()}</h1>
                    </Link>
                    
                </div>
            </div>
        </Layout>
    </>
    )
}

export default Servicios


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