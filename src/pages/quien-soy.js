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
                <p>
                  Soy el <strong>Dr. Gabriel Robledo Kaiser</strong>  nací el 27 de septiembre de 1950 en Bogotá. 
                  <br/>
                  Cuento con más de 40 años de experiencia siendo un reconocido especialista en <strong>Cardiología y Cardio-Oncología.</strong>
                </p>
             </div>
             <div className='secondAbout'>
               {/* <img  src={imgRobledo} alt="doctor robledo kaiser cardiologo corazon "/> */}
               <p className='mainDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure minus, libero quisquam voluptate natus voluptas ipsum molestiae assumenda fuga cum. Ab distinctio sapiente fuga, facilis ut ipsa ipsum accusantium iure?</p>
               <Link id='link1' to='/servicios'>
                 Revisa mis servicios
               </Link>
               <Link id='link2' to='/biblioteca'>
                 Revisa mi bibliografía
               </Link>
             </div>
           </div>   
        </Layout>
        </>
    )
}

export default QuienSoy
