import React , {useState , useEffect , useRef} from "react"
import {document} from 'browser-monads'
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from '../components/layout'
//FullPage
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation  } from '@ap.cx/react-fullpage'
//Lottie
import Lottie from 'react-lottie'
import lottie from 'lottie-web'
import animationScroll from '../components/animations/indexSlider/scroll.json'
import preloader from '../components/animations/indexSlider/preloader.json'
//Gsap
import {TimelineMax, gsap , CSSPlugin , Power4} from 'gsap/all'
gsap.registerPlugin(CSSPlugin)

export default ()=>{
  const [slideState, setSlideState] = useState("01")
  const [idSlider, setIdSlider] = useState("numLeft")
  const [actualSlider, setActualSlider] = useState(0)
  const [displayPreloader, setDisplayPreloader] = useState("inherit")
  const [initStyles, setInitStyles] = useState({
    height : "100vh",
    width: "100vw",
    overflow: "hidden"
  })
  const [play1, setPlay1] = useState(false)
  const [play2, setPlay2] = useState(false)
  const [play3, setPlay3] = useState(false)
  const [play4, setPlay4] = useState(false)

  const animationScrollRef = useRef(null)
  const preloaderRef = React.createRef()

  const defaultOptionsScroll = {
    loop: true,
    autoplay: false, 
    animationData: animationScroll,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  };


  const t1 = new TimelineMax({paused: true});
  const t2 = new TimelineMax({paused: true});
  const t3 = new TimelineMax({paused: true});
  // const t4 = new TimelineMax({paused: true});
  const textSlider1 = document.getElementsByClassName('textSlider1');
  const textSlider2 = document.getElementsByClassName('textSlider2');
  const textSlider3 = document.getElementsByClassName('textSlider3');
  const textSlider4 = document.getElementsByClassName('textSlider4');
  const imgSlider1 = document.getElementsByClassName('imgSlider1');
  const backSlider1 = document.getElementsByClassName('backSlider1');
  const mask1 = document.getElementsByClassName('mask1');

  useEffect(() => {

    const anim = lottie.loadAnimation({
      container: preloaderRef.current,
      animationData: preloader,
      loop: false,
    })
    anim.addEventListener('DOMLoaded', () => {
      anim.play()
    } )
    anim.addEventListener('complete', () => {
      setDisplayPreloader("none")
      setInitStyles({
        overflow: "inherit"
      })
      t2.to(backSlider1, 1 , {width : "20vw" , left: "85%" })
        .to(textSlider1, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
        .to(imgSlider1 , 1 , {opacity: 1, ease: Power4.easeInOut}, "cross" )
        .to(mask1 , 0.5 , {left: "100%", ease: Power4.easeInOut}, )
        .to(imgSlider1 , 0.3 , {boxShadow: "5px 5px 31px -10px rgba(0,0,0,0.66)"})
        .to(".scrollIcon", 0.5 , {opacity: 1, ease : Power4.easeInOut} ) 
        .play()
    })

  }, [])
  

  const onShowSlider = (e) =>{
      if(e.number === 0){
        setActualSlider(0)
          setIdSlider("numLeft")
          setSlideState("01");
          t1.to(textSlider1, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")      
            .play()
      }else if(e.number === 1){
        if (!play2) {
            setIdSlider("numRight")
            setSlideState("02");
            t1.to(".backSlider2" , 2 , {left: "100vw" , ease: Power4.easeInOut})
              .to(textSlider2, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")            
              .play();
            setPlay2(true)
        }
        setActualSlider(1)
      }else if(e.number === 2){
        if (!play3) {
            setIdSlider("numLeft")
            setSlideState("03");
            t1.to(".cortina1" , 2 , {left: "-50%" , ease: Power4.easeInOut} , "cross")
              .to(".cortina2" , 2 , {left: "100%", ease: Power4.easeInOut}, "cross")
              .to(".img3" , 0.5 , {opacity : 1 , ease : Power4.easeInOut })
              .to(".imgSlider3" , 0.5, {boxShadow: "5px 5px 31px -10px rgba(0,0,0,0.66)", ease: Power4.easeInOut})
              .to(textSlider3, 0.5 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, )            
              .play();  
            setPlay3(true)         
        }
        setActualSlider(2)
      }else if(e.number === 3){
        if (!play4) {
          setIdSlider("numRight")
          setSlideState("04");
          t1.to(".backSlider4" , 1, {left: "-100vw" , ease : Power4.easeInOut})
            .to(textSlider4, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
            .play();
            setPlay4(false)  
        }
                 
      }
  }

  return(
  <>
  <div style={{display:displayPreloader}} ref={preloaderRef} className="preloaderAnimation">
  </div>
  <div style={initStyles}>
  <Layout>
    <SEO title="Inicio" />
    {/* Scroll icon */}
    <div className='scrollIcon'>
      <Lottie 
        ref={animationScrollRef}
        options={defaultOptionsScroll}
        width="15vw"
        height="15vh"/>
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
            <div className='backSlider1'></div>
            <div className='imgSlider1'>
              <div className='mask1'></div>
              <img  src="https://gestion.drgabrielrobledo.com/uploads/corazon_98e0a61bb8.jpeg" alt="corazon"/>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className='itemSlider' >
            <div className='one textSlider2' id='leftSlider'>
              <h1>Un poco sobre mi</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae id hic 
                officiis aliquid sequi ratione labore possimus tenetur consectetur eligendi. 
                Ex odit quod nesciunt maxime hic magni quibusdam. Optio, est.</p>
              <Link to="/quien-soy">Te invito a visitar conocer más sobre mi</Link>
            </div>
            <div className='backSlider2'></div>
            <div className='imgSlider2'>
              <div className='mask2'></div>
              <img  src="https://gestion.drgabrielrobledo.com/uploads/conoceme_5d073e9fda.png" alt="doctor robledo kaiser"/>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className='itemSlider' >
            <div className='one textSlider3' id='rightSlider'>
                <h1>Reserva tu cita</h1>
                <p>Juntos encontraremos el problema</p>
                <Link to="/citas">Reserva tu cita.</Link>
            </div>
            <div className='backSlider3'></div>
            <div className='cortina1'></div>
            <div className='cortina2'></div>
            <div className='imgSlider3'>
              <div className='mask3'></div>
              <img className='img3' src="https://gestion.drgabrielrobledo.com/uploads/citas_8727f9b75f.jpeg" alt="doctor robledo kaiser"/>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className='itemSlider' >
            <div className='one textSlider4' id='rightSlider'>
             <h1>Biblioteca</h1>
             <p>Lorem ipsum, dolor sit amet consectetur 
               adipisicing elit. Sint eum provident aliquid 
               rerum ratione nulla asperiores eveniet error et 
               tempore. Asperiores placeat accusamus quo quos 
               neque distinctio enim at dolorum.</p>
             <Link to="/biblioteca">Revisa mi biblioteca</Link>
            </div>
            <div className='backSlider4'></div>
            <div className='imgSlider4'>
              <div className='mask4'></div>
              <img className='img4' src="https://gestion.drgabrielrobledo.com/uploads/biblioteca_48a7b558b7.jpeg" alt="doctor robledo kaiser"/>
            </div>
          </div>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  </Layout>
  </div>
  </>
  )
}
