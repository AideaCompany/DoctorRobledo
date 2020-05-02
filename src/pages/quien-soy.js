import React, {useState, useEffect , useRef} from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql , Link } from "gatsby"


//Lottie
import Lottie from 'react-lottie'
import animationSlider from '../components/animations/indexSlider/gafas.json'

const QuienSoy = ({data}) =>{
    //const [content, setContent] = useState('')
    const [mainTitle, setMainTitle] = useState('')
    const [imgRobledo, setImgRobledo] = useState('')

   

    const animationRef = useRef(null);

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
        <SEO title="¿Quién soy?" />
        <Layout>
           <div className='mainContainerAbout'>
             <div className='firstAbout'>
                <h1>{mainTitle}</h1>
                <div className='animationAbout'>
                  <Lottie
                    options={defaultOptions}
                    width='70vw'
                    height='70vh'
                    />
                </div>
             </div>
             <div className='secondAbout'>
               <img  src={imgRobledo} alt="doctor robledo kaiser cardiologo corazon "/>
               <p className='mainDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure minus, libero quisquam voluptate natus voluptas ipsum molestiae assumenda fuga cum. Ab distinctio sapiente fuga, facilis ut ipsa ipsum accusantium iure?</p>
               <Link id='link1' to='/servicios'>
                 Revisa mis servicios
               </Link>
               <Link id='link2' to='/servicios'>
                 Revisa mi bibliografía
               </Link>
             </div>
             <div className='thirdAbout'>
              <h1>Centro cargiologico de Bogotá</h1>
              <img src="https://centrocardiobogota.com/wp-content/uploads/revslider/cosmetics3/banner4.jpg" alt="doctor robledo kaiser centro cardiologico de bogota"/>
              <p className='thridDesc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quae delectus voluptas. Sequi dolorum inventore aperiam fugit sapiente neque placeat odit sed optio eligendi culpa, officiis ad consequuntur soluta ducimus!</p>
            </div>
           </div>   
        </Layout>
        </>
    )
}

export default QuienSoy

