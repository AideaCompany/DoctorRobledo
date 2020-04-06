import React , {useState , useEffect , useRef} from "react"
// import { Link } from "gatsby"


//Components
import SEO from "../components/seo"
import Layout from '../components/layout'


//materialUI
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
// import InputLabel from '@material-ui/core/InputLabel';

//FullPage
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation  } from '@ap.cx/react-fullpage'

//Lottie
import Lottie from 'react-lottie'
import animationSlider from '../components/animations/indexSlider/data.json'

//Gsap
import {TimelineMax, gsap , CSSPlugin , Power4} from 'gsap/all'
gsap.registerPlugin(CSSPlugin)
function IndexPage (){

  const [slideState, setSlideState] = useState(1)
  const [direction, setDirection] = useState(1)
  const [actualSlider, setActualSlider] = useState(0)

  const animationRef = useRef(null)
  const defaultOptions = {
    loop: false,
    autoplay: true, 
    segments: true,
    animationData: animationSlider,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  };


  const t1 = new TimelineMax({paused: true});
  const t2 = new TimelineMax({paused: true});
  const textSlider1 = document.getElementsByClassName('textSlider1');
  const textSlider2 = document.getElementsByClassName('textSlider2');
  const textSlider3 = document.getElementsByClassName('textSlider3');
  const textSlider4 = document.getElementsByClassName('textSlider4');

  const onShowSlider = (e) =>{
    if (animationRef.current.anim) {
      const {anim} = animationRef.current;
      
    if(e.number === 0){
      setDirection(-1)
      anim.playSegments([81, 36], true)
      setActualSlider(0)
      anim.addEventListener('complete', ()=> {
        t1.to(textSlider1, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
          .to(textSlider2, 0.5 , { opacity: 0, ease: Power4.easeInOut}, "cross")
          .play()
      })
    }else if(e.number === 1){
      if (e.number>actualSlider) {
        setDirection(1);
        anim.playSegments([36,80], true);
        anim.addEventListener('complete', ()=> {
          t1.to(textSlider2, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
            .to(textSlider1, 0.5 , {top : "40%" , opacity: 0, ease: Power4.easeInOut}, "cross")
            .play()
        })
      }else{
        setDirection(-1)
        anim.playSegments([148,80], true)
        anim.addEventListener('complete', ()=> {
          t1.to(textSlider2, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
            .to(textSlider3, 0.5 , {opacity: 0, ease: Power4.easeInOut}, "cross")
            .play()
        })
      }
      setActualSlider(1)
    }else if(e.number === 2){
      if (e.number>actualSlider) {
        setDirection(1)
        anim.playSegments([81,148], true)
        anim.addEventListener('complete', ()=> {
          t1.to(textSlider3, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
            .to(textSlider2, 0.5 , { opacity: 0, ease: Power4.easeInOut}, "cross")
            .play()
        })
      }else{
        setDirection(-1)
        anim.playSegments([220,148], true)
        anim.addEventListener('complete', ()=> {
          console.log("up")
          t1.to(textSlider3, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
            .to(textSlider4, 0.5 , { opacity: 0, ease: Power4.easeInOut}, "cross")
            .play()
        })
      }
      setActualSlider(2)
    }else if(e.number === 3){
      setDirection(1)
      anim.playSegments([149,220], true)
      anim.addEventListener('complete', ()=> {
        t1.to(textSlider4, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
          .to(textSlider3, 0.5 , { opacity: 0, ease: Power4.easeInOut}, "cross")
          .play()
      })
      
    }
    }
    
  }

  return(
  <Layout>
    <SEO title="Inicio" />
    
    <img className='back' src={"../icons/heart.svg"} alt="back doctor robledo kaiser"/>

    {/* Animacion */}
    <div className='animationIndex'>
      <Lottie
        ref={animationRef}
        options={defaultOptions}
        width="100vw"
        height="100vh"
        direction={direction}
        // segments={segment}'
        eventListeners={[
        {
          eventName : 'DOMLoaded',
          callback : () => {
            const {anim} = animationRef.current;
            anim.playSegments([0,35], true)
          }
        },
        {
          eventName: 'complete',
          callback : () => { 
              t2.to(textSlider1, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}).play()
              
          }
        }]}
      />
    </div>


    {/* Primera Parte */}
   
    <Fullpage  onChange={(e)=>onShowSlider(e)}>
      <FullpageNavigation itemStyle={{display : "none"}}/>
      <FullPageSections >
        <FullpageSection   >
          <div className='itemSlider' >
            <div className='one textSlider1' id='leftSlider'>
              <div>
                <h1>Tu <strong>corazón</strong> </h1>
                <h2>es nuestro compromiso</h2>
              </div>
            </div>
            <h1 className='numberSlider' id='numLeft'>01</h1>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className='itemSlider' >
          <div className='one textSlider2' id='rightSlider'>
              <div>
                <h1>Servicios</h1>
                <h2>Nuestro sello de la casa</h2>
              </div>
            </div>
            <h1 className='numberSlider' id='numRight'>02</h1>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className='itemSlider' >
          <div className='one textSlider3' id='leftSlider'>
              <div >
                <h1>Conoce</h1>
                <h2>Sobre mi y mi trabajo</h2>
              </div>
          </div>
            <h1 className='numberSlider' id='numLeft'>03</h1>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className='itemSlider' >
          <div className='one textSlider4' id='rightSlider'>
              <div>
                <h1>Reserva tu cita</h1>
                <h2>Juntos encontraremos el problema</h2>
              </div>
            </div>
            <h1 className='numberSlider' id='numRight'>04</h1>
          </div>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  </Layout>
  )
} 

export default IndexPage
