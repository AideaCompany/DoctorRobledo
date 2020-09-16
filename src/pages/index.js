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

export default () =>{

  const [slideState, setSlideState] = useState("01")
  const [idSlider, setIdSlider] = useState("numLeft")
  const [displayPreloader, setDisplayPreloader] = useState("inherit")
  const [initStyles, setInitStyles] = useState({
    height : "100vh",
    width: "100vw",
    overflow: "hidden"
  })
  const [play2, setPlay2] = useState(false)
  const [play3, setPlay3] = useState(false)
  const [play4, setPlay4] = useState(false)
  const [classArrow, setClassArrow] = useState('inherit')

  const animationScrollRef = useRef(null)
  const preloaderRef = React.createRef()

  const defaultOptionsScroll = {
    loop: true,
    autoplay: false, 
    speed: 0.5,
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
      speed: 1.5,
      loop: false,
      autoplay: false,
    })
    console.log(localStorage.getItem('preloader'))
    if (localStorage.getItem('preloader')) {
      setDisplayPreloader("none")
      setInitStyles({
        overflow: "inherit"
      })
      t2.to(backSlider1, 1 , {width : "20vw" , left: "85%" })
          .to(textSlider1, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
          .to([imgSlider1,".serviceIndex"] , 1 , {opacity: 1, ease: Power4.easeInOut}, "cross" )
          .to(mask1 , 0.5 , {left: "100%", ease: Power4.easeInOut}, )
          .to([imgSlider1] , 0.3 , {boxShadow: "5px 5px 31px -10px rgba(0,0,0,0.66)"})
          .to(".scrollIcon", 0.5 , {opacity: 1, ease : Power4.easeInOut} ) 
          .play()
    }else{
      anim.addEventListener('DOMLoaded', () => {
        anim.play()
      })
      anim.addEventListener('complete', () => {
        
        setDisplayPreloader("none")
        setInitStyles({
          overflow: "inherit"
        })
        t2.to(backSlider1, 1 , {width : "20vw" , left: "85%" })
          .to(textSlider1, 1 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
          .to([imgSlider1,".serviceIndex"] , 1 , {opacity: 1, ease: Power4.easeInOut}, "cross" )
          .to(mask1 , 0.5 , {left: "100%", ease: Power4.easeInOut}, )
          .to([imgSlider1] , 0.3 , {boxShadow: "5px 5px 31px -10px rgba(0,0,0,0.66)"})
          .to(".scrollIcon", 0.5 , {opacity: 1, ease : Power4.easeInOut} ) 
          .play();
        localStorage.setItem('preloader', true)
      })
    }
  }, [])
  

  const onShowSlider = (e) =>{
      if(e.number === 0){
          setIdSlider("numLeft")
          setSlideState("01");
          t1.to(textSlider1, 0.5 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")      
            .play()
      }else if(e.number === 1){
        if (!play2) {
            setIdSlider("numRight")
            setSlideState("02");
            t1.to(".backSlider2" , 1 , {left: "100vw" , ease: Power4.easeInOut})
              .to(textSlider2, 0.3 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")            
              .play();
            setPlay2(true)
        }
      }else if(e.number === 2){
        setClassArrow('inherit')
        if (!play3) {
            setIdSlider("numLeft")
            setSlideState("03");
            t1.to(".cortina1" , 1 , {left: "-50%" , ease: Power4.easeInOut} , "cross")
              .to(".cortina2" , 1 , {left: "100%", ease: Power4.easeInOut}, "cross")
              .to(".img3" , 0.5 , {opacity : 1 , ease : Power4.easeInOut }, 'shadow')
              .to(".imgSlider3" , 0.5, {boxShadow: "5px 5px 31px -10px rgba(0,0,0,0.66)", ease: Power4.easeInOut},'shadow')
              .to(textSlider3, 0.5 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, )            
              .play();  
            setPlay3(true)         
        }
      }else if(e.number === 3){
        setClassArrow('none')
        if (!play4) {
          setIdSlider("numRight")
          setSlideState("04");
          t1.to(".backSlider4" , 0.5, {left: "-100vw" , ease : Power4.easeInOut})
            .to(textSlider4, 0.5 , {top : "50%" , opacity: 1, ease: Power4.easeInOut}, "cross")
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
    <div style={{display: classArrow}} className={`scrollIcon`}>
      <Lottie 
        ref={animationScrollRef}
        options={defaultOptionsScroll}
        width="15vw"
        height="15vh"/>
    </div>

    {/* Primera Parte */}
    {/* <h1 className='numberSlider' id={idSlider}>{slideState}</h1> */}
    <Fullpage  onChange={(e)=>onShowSlider(e)}>
      <FullpageNavigation itemStyle={{display : "none"}}/>
      <FullPageSections>
        <FullpageSection   >
          <div className='itemSlider' >
            <div className='one textSlider1 textSlider2Cel' id='leftSlider'>
              <h1>Tu corazón</h1>
              <p>Nuestro compromiso</p>
              <Link className='linkToService' to="/servicios">Te invito a conocer mis servicios</Link>
            </div>
            <Link to='servicios/cardiologia' className='serviceIndex' id="iconService1">
              <img className='iconServiceIndex' src="../index/cardiology.svg" alt="cardiologia doctor robledo bogotá colombia"/>
              <h1>Cardiología</h1>
            </Link>
            <Link to='servicios/contrapulsacion' className="serviceIndex" id="iconService2" >
              <img className='iconServiceIndex' src="../index/Contrapulsacion.svg" alt="contrapulsacion doctor robledo bogotá colombia"/>
              <h1>Contrapulsación externa</h1>
            </Link>
            <Link to='servicios/rigidez-arterial' className="serviceIndex" id="iconService3">
              <img className='iconServiceIndex' src="../index/rigidez-arterial.svg" alt="rigidez arterial doctor robledo bogotá colombia"/>
              <h1>Rigidez Arterial</h1>
            </Link>
            <div className='imgSlider1'>
              <div className='mask1'></div>
              <img  src="https://gestion.drgabrielrobledo.com/uploads/corazon_c9783caf1b.jpg" alt="corazon"/>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className='itemSlider' >
            <div className='one textSlider2 ' id='leftSlider'>
              <h1>Un poco sobre mi</h1>
              <p>
              Soy el <strong>Dr. Gabriel Robledo Kaiser</strong>  nací el 27 de septiembre de 1950 en Bogotá. 
                  Cuento con más de 40 años de experiencia siendo un reconocido especialista en <strong>Cardiología y Cardio-Oncología.</strong>
              </p>
              <Link className='linkToService' to="/quien-soy">Te invito a conocer más sobre mi</Link>
            </div>
            <div className='backSlider2'></div>
            <div className='imgSlider2'>
              <div className='mask2'></div>
              <img  src="https://gestion.drgabrielrobledo.com/uploads/conoceme_8eac7439c7.png" alt="doctor robledo kaiser"/>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className='itemSlider' >
            <div className='one textSlider3' id='rightSlider'>
                <h1>Reserva tu cita</h1>
                <p>Juntos encontraremos el problema</p>
                <Link className='linkToService' to="/citas">Reserva tu cita dando clic aquí</Link>
            </div>
            <div className='backSlider3'></div>
            <div className='cortina1'></div>
            <div className='cortina2'></div>
            <div className='imgSlider3'>
              <div className='mask3'></div>
              <img className='img3' src="https://gestion.drgabrielrobledo.com/uploads/citas_c4c9077c8f.png" alt="doctor robledo kaiser"/>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className='itemSlider' >
            <div className='one textSlider4' id='rightSlider'>
              <h1>Biblioteca</h1>
              <p>
                Aprendamos juntos!
                <br/>
                Noticias de interés y opiniones sobre el mundo de la médicina.
              </p>
              <Link className='linkToService' to="/biblioteca">Artículos de interes</Link>
            </div>
            <div className='backSlider4'></div>
            <div className='imgSlider4'>
              <div className='mask4'></div>
              <img className='img4' src="https://gestion.drgabrielrobledo.com/uploads/biblioteca_f0d7cf5038.jpg" alt="doctor robledo kaiser"/>
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
