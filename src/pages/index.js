import React from "react"
import { Link } from "gatsby"


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

import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation , FullpageNumber } from '@ap.cx/react-fullpage'

function IndexPage (){

  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formControl: {
      margin: 0,
      minWidth: "20vw",
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    select : {
      '&:before': {
        borderColor: "#006599",
        backgroundColor : "transparent"
      },
      '&:after': {
        borderColor: "#006599",
        
      },
      '&$disabled:before, &$disabled:hover:before':{
        borderColor: "#58C0C9 !important",
      }
    },
    icon : {
      fill : "#006599"
    },
    selectMenu: {
      '&:focus':{
        backgroundColor : 'transparent !important'
      }
    },
    textField: {
      margin: 0,
      minWidth: "20vw",
      color : "#006599 !important",
      
    },
    label:
     {  color : "#006599 !important",
      '&$focused': {
        color: '#006599 !important'
      },
    },
    underline: {
      "&&:before": {
        borderBottom: "1px solid #006599 !important"
      },
      "&&:after": {
        borderBottom: "#58C0C9"
      }
    }
  }));

  const classes = useStyles();

  const onShowSlider = (e) =>{
    console.log(e)
  }

  return(
  <Layout>
    <SEO title="Inicio" />
    
    <img className='back' src={"../icons/heart.svg"} alt="back doctor robledo kaiser"/>

    {/* Primera Parte */}
   
    <Fullpage onChange={(e)=>onShowSlider(e)}>
      <FullpageNavigation itemStyle={{display : "none"}}/>
      <FullPageSections  >
        <FullpageSection  >
          <div className='itemSlider' >
            <div className='one' id='leftSlider'
            >
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
          <div className='one' id='rightSlider'>
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
          <div className='one' id='leftSlider'>
              <div>
                <h1>Conoce</h1>
                <h2>Sobre mi y mi trabajo</h2>
              </div>
            </div>
            <h1 className='numberSlider' id='numLeft'>03</h1>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className='itemSlider' >
          <div className='one' id='rightSlider'>
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
