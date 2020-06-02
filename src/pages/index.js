import React , {useState , useEffect , useRef} from "react"
import {document} from 'browser-monads'
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from '../components/layout'
//FullPage
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation  } from '@ap.cx/react-fullpage'
//Lottie
import Lottie from 'react-lottie'
import animationSlider from '../components/animations/indexSlider/data.json'
import animationScroll from '../components/animations/indexSlider/scroll.json'
import animationPre from '../components/animations/indexSlider/preloader.json'
//Gsap
import {TimelineMax, gsap , CSSPlugin , Power4} from 'gsap/all'
gsap.registerPlugin(CSSPlugin)

export default ()=>{
  const [slideState, setSlideState] = useState("01")
  const [idSlider, setIdSlider] = useState("numLeft")
  const [direction, setDirection] = useState(1)
  const [actualSlider, setActualSlider] = useState(0)
  const [displayAnimation, setDisplayAnimation] = useState("inherit")

  const animationRef = useRef(null)
  const animationScrollRef = useRef(null)
  const animationPreloader = useRef(null)

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    segments: true,
    animationData: animationSlider,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  };
  const defaultOptionsScroll = {
    loop: false,
    autoplay: false, 
    segments: true,
    animationData: animationScroll,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  };

  const defaultOptionsPreloader = {
    loop: false,
    autoplay: true, 
    animationData: animationPre,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  }



  const t1 = new TimelineMax({paused: true});
  const t2 = new TimelineMax({paused: true});
  const t3 = new TimelineMax({paused: true});
  const t4 = new TimelineMax({paused: true});
  const textSlider1 = document.getElementsByClassName('textSlider1');
  const textSlider2 = document.getElementsByClassName('textSlider2');
  const textSlider3 = document.getElementsByClassName('textSlider3');
  const textSlider4 = document.getElementsByClassName('textSlider4');
  const numberSlider = document.getElementsByClassName('numberSlider');

  const onShowSlider = (e) =>{
    if (animationRef.current.anim) {
      const {anim} = animationRef.current;
      if(e.number === 0){
        setDirection(-1)
        anim.playSegments([81, 36], true)
        setActualSlider(0)
        t3.to(numberSlider, 1 , {opacity: 0}).play()
        anim.addEventListener('complete', ()=> {
          setIdSlider("numLeft")
          setSlideState("01");
          t1.to(textSlider1, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
            .to(textSlider2, 0.5 , { opacity: 0, ease: Power4.easeInOut}, "cross")
            .to(numberSlider , 1 , {opacity: 1}, 'cross')
            .play()
        })
      }else if(e.number === 1){
        if (e.number>actualSlider) {
          setDirection(1);
          anim.playSegments([36,80], true);
          t3.to(numberSlider, 1 , {opacity: 0}).play()
          anim.addEventListener('complete', ()=> {
            setIdSlider("numRight")
            setSlideState("02");
            t2.kill();
            t1.to(textSlider2, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
              .to(textSlider1, 0.5 , {opacity: 0, ease: Power4.easeInOut}, "cross")
              .to(numberSlider , 1 , {opacity: 1}, 'cross')
              .play()
          })
        }else{
          setDirection(-1)
          anim.playSegments([160,80], true)
          t3.to(numberSlider, 1 , {opacity: 0}).play()
          anim.addEventListener('complete', ()=> {
            setIdSlider("numRight")
            setSlideState("02");
            t1.to(textSlider2, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
              .to(textSlider3, 0.5 , {opacity: 0, ease: Power4.easeInOut}, "cross")
              .to(numberSlider , 1 , {opacity: 1}, 'cross')
              .play()
          })
        }
        setActualSlider(1)
      }else if(e.number === 2){
        if (e.number>actualSlider) {
          setDirection(1)
          anim.playSegments([81,160], true)
          t3.to(numberSlider, 1 , {opacity: 0}).play()
          anim.addEventListener('complete', ()=> {
            setIdSlider("numLeft")
            setSlideState("03");
            t1.to(textSlider3, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
              .to(textSlider2, 0.5 , { opacity: 0, ease: Power4.easeInOut}, "cross")
              .to(numberSlider , 1 , {opacity: 1}, 'cross')
              .play()
          })
        }else{
          setDirection(-1)
          anim.playSegments([220,160], true)
          t3.to(numberSlider, 1 , {opacity: 0}).play()
          anim.addEventListener('complete', ()=> {
            setIdSlider("numLeft")
            setSlideState("03");
            t2.to(textSlider3, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
              .to(textSlider4, 0.5 , { opacity: 0, ease: Power4.easeInOut}, "cross")
              .to(numberSlider , 1 , {opacity: 1}, 'cross')
              .play()
          })
        }
        setActualSlider(2)
      }else if(e.number === 3){
        
        setDirection(1)
        anim.playSegments([160,220], true)
        t3.to(numberSlider, 1 , {opacity: 0}).play()
        anim.addEventListener('complete', ()=> {
          setIdSlider("numRight")
          setSlideState("04");
          t1.to(textSlider4, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
            .to(textSlider3, 0.5 , { opacity: 0, ease: Power4.easeInOut}, "cross")
            .to(numberSlider , 1 , {opacity: 1}, 'cross')
            .play()
        })
        
      }
    }
    
  }

  return(
  <>
  <div style={{display: displayAnimation}} className='preloaderAnimation'>
    <Lottie ref={animationPreloader}
            options={defaultOptionsPreloader}
            width="100vw"
            height="100vh"
            eventListeners={[
              {
                eventName: 'DOMLoaded',
                callback : () => {
                  const {anim} = animationPreloader.current;
                  anim.play()
                }
              },
              {
                eventName : 'complete',
                callback : () => {
                  setDisplayAnimation("none")
                  const {anim} = animationRef.current;
                  anim.playSegments([0,35], true)
                }
              }
            ]} />
  </div>
    <Layout>
      <SEO title="Inicio" />
      
      <img className='back' src={"../icons/heart.svg"} alt="back doctor robledo kaiser"/>
      {/* Scroll icon */}
      <div className='scrollIcon'>
        <Lottie 
          ref={animationScrollRef}
          options={defaultOptionsScroll}
          width="15vw"
          height="15vh">
        </Lottie>
      </div>
      {/* Animacion */}
      <div className='animationIndex'>
        <Lottie
          ref={animationRef}
          options={defaultOptions}
          width="100vw"
          height="100vh"
          direction={direction}
          eventListeners={[
          {
            eventName: 'complete',
            callback : () => { 
                t2.to(textSlider1, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut})
                  .to(numberSlider, 1  , {opacity : 0.15})    
                  .play()

            }
          }]}
        />
      </div>
      {/* Primera Parte */}
      <h1 className='numberSlider' id={idSlider}>{slideState}</h1>
      <Fullpage  onChange={(e)=>onShowSlider(e)}>
        <FullpageNavigation itemStyle={{display : "none"}}/>
        <FullPageSections >
          <FullpageSection   >
            <div className='itemSlider' >
              <div className='one textSlider1' id='leftSlider'>
                <h1>Tu corazón</h1>
                <p>Nuestro compromiso</p>
                <Link to="/servicios">Te invito a conocer mis servicios</Link>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection>
            <div className='itemSlider' >
              <div className='one textSlider2' id='rightSlider'>
                <h1>Biblioteca</h1>
                <p>Artículos y noticias de interes</p>
                <Link to="/servicios">Te invito a visitar la Biblioteca</Link>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection>
            <div className='itemSlider' >
              <div className='one textSlider3' id='leftSlider'>
                  <h1>Reserva tu cita</h1>
                  <p>Juntos encontraremos el problema</p>
                  <Link to="/citas">Reserva tu cita.</Link>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection>
            <div className='itemSlider' >
              <div className='one textSlider4' id='rightSlider'>
              <h1>Conoce</h1>
              <p>Mi historia y mi trabajo</p>
              <Link to="/quien-soy">Revisa mi historia</Link>
              </div>
            </div>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </Layout>
  </>
  )
}
