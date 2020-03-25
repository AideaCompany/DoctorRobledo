import React from "react"
import { Link } from "gatsby"


//Components
import SEO from "../components/seo"
import Layout from '../components/layout'
import Header from '../components/header'

//materialUI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

function IndexPage (){

  const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  return(
  <Layout>
    <Header/>
    <SEO title="Home" />
    
    <img className='back' src={"../back/back.svg"} alt="back doctor robledo kaiser"/>

    {/* Primera Parte */}
    <div className='firstIndex'>
      <div className='item1'>
        <div className='one'>
          <img src={"../icons/heart.svg"} alt="heart"/>
          <div>
          <h1>Tu <strong>corazón</strong> es nuestro compromiso</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum 
            suscipit commodi molestiae nisi optio vero sit, rerum aperiam perspiciatis 
            mollitia nam ipsum nihil libero inventore, aliquam consectetur nemo, reiciendis 
            necessitatibus.</p>
          </div>
        </div>
        <div className='two'>
          <Link>
            <div className='buttonOne'>
              <h2>Conoce más de nuestros planes</h2> 
            </div>
          </Link>
        </div>
      </div>
      <div className='itemGeneral' id="item2">
        <img src={"../icons/surface1.svg"} alt="jeringa doctor robledo kaiser"/>
        <div className='one'>
          <h1>Los mejores <strong>tratamientos</strong></h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel placeat at 
            mollitia 
            tempora?</p>
        </div>
      </div>
      <div className='itemGeneral' id="item3">
        <img src={"../icons/personal.svg"} alt="personal medico doctor robledo kaiser"/>
        <div className='one'>
          <h1><strong>Personal médico</strong>de primera</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel placeat at 
            mollitia 
            tempora?</p>
        </div>
      </div>
      <div className='itemGeneral' id="item4">
        <img src={"../icons/experiencia.svg"} alt="experiencia cardiologia doctor robledo kaiser"/>
        <div className='one'>
          <h1><strong>Personal médico</strong>de primera</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel placeat at 
            mollitia 
            tempora?</p>
        </div>
      </div>
    </div>
    
    {/* Segunda parte */}
    <div className='secondIndex'>
      <div className='backSecond'></div>
        <img className='imgSecond' src={"../temp/ej1.svg"} alt="cardiologo doctor robledo kaiser"/>
        <div className='item1'>
          <h1>Reserva tu cita</h1>
          <FormControl className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Nombre y Apellido"/>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
    </div>
  </Layout>
  )
} 

  
  
  


export default IndexPage
