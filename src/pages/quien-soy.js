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
    const [mainDesc, setMainDesc] = useState('')
    const [imgRobledo, setImgRobledo] = useState('')

    useEffect(() => {
      var content =''
      data.allWordpressPage.nodes.forEach(e => {
        content = e.content
      });   
      data.allWordpressWpMedia.nodes.forEach(e=>{
        setImgRobledo(e.source_url)
      })
      const div = document.createElement('div');
      div.innerHTML = content;
      const [mainTitle, p] = [...div.children].map(el=>el.textContent);
      setMainTitle(mainTitle)
      setMainDesc(p)
    }, [data])

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
               <p className='mainDesc'>{mainDesc}</p>
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
              <p className='thridDesc'>{mainDesc}</p>
            </div>
           </div>   
        </Layout>
        </>
    )
}

export default QuienSoy


export const pageQueryAbout = graphql`
{
  allWordpressPage(filter: {title: {eq: "about"}}) {
    nodes {
      title
      content
    }
  }
  allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "ABOUT"}}}}) {
    nodes {
      content
    }
  }
  allWordpressWpMedia(filter: {title: {eq: "robledoAbout"}}) {
    nodes {
      source_url
      title
    }
  }
}



`