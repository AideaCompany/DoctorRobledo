import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import axios from 'axios'

//material UI 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

//form
import { useForm } from 'react-hook-form';

import {message} from 'antd'

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(marginForm()),
        width: widthForm(),
        color: "#fff"
      },
      "& .MuiFormHelperText-root": {
        color: "#fff"
      }
    },
    label: {
        color: "#fff",
        "&$focusedLabel": {
          color: "#fff"
        },
        "&$erroredLabel": {
          color: "#ffff"
        }
      },
      input: {
          color: "#fff " ,
          backgroundColor: "inherit",
          "& .MuiSvgIcon-root":{
              color:"#fff"
          }
      },
      focusedLabel: {},
      erroredLabel: {},
      underline: {
        borderBottom: "2px solid #fff",
        "&$error:after": {
          borderBottomColor: "#fff"
        },
        "&:after": {
          borderBottom: `2px solid #fff`
        }
      },
      error: {}
  }));

  const marginForm = () =>{
    if (typeof window !== 'undefined') {
        if (window.matchMedia("(max-width: 896px) and (orientation : landscape)").matches) {
            return 0
        }else{
            return 1
        }
    }
    
  }

  const widthForm = () => {
      if (typeof window !== 'undefined') {
        if (window.matchMedia("(max-width: 1024px) and (orientation : portrait)").matches || window.matchMedia("(max-width: 375px) and (orientation : portrait)").matches ) {
            return '80vw'
        }else{
            return '40vw'
        }
      }
      
  }

const Contacto = () =>{

    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        axios.post(
            "https://gestion.drgabrielrobledo.com/email",
            {
                'to' : "joeldzv95@gmail.com",
                'subject' : "Nuevo Mensage desde www.drgabrielrobledo.com",
                'html' : `<!DOCTYPE html
                PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>A Simple Responsive HTML Email</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
            <style type="text/css">
                * {
                    font-family: 'Roboto', sans-serif;
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    }
    
                body {
                    margin: 0;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    position: relative;
                    overflow-x: hidden;
                    box-sizing: border-box;
                }
        
                .content {
                    width: 100%;
                    max-width: 600px;
                }
                .mainContainer{
                    width: 90%;
                    height: 600px;
                    background-color: #ffffff ;
                    margin: auto;
                    color: rgb(0, 101, 153);
                    
                }
                .mainContainer .headerC{
                    background-color:rgb(0, 101, 153) ;
                    color: #ffffff;
                    text-align: center;
                    padding: 20px;
                    height: 300px;
                    position: relative;
    
                }
                .mainContainer .headerC svg{
                    width: 100%;
                }
                .mainContainer .headerC h1{
                    font-size: 2em;
    
                }
        
                .mainContainer .bodyC{
                    text-align: left ;
                    position: relative;
                    height: 400px ;
                }
                .mainContainer .bodyC ul{
                    margin-left: 5vw;
                }
    
                .mainContainer .bodyC ul li{
                    list-style: none;
                    margin: 10px
                }
            </style>
        </head>
        <body >
            <div class="mainContainer">
                <div class="headerC">
                    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="140" viewBox="0 0 1929.5 555.656"><g transform="translate(5 -267.844)"><path d="M0,628.5H355.5a24.125,24.125,0,0,1,23.88,23.846v82.1a12.26,12.26,0,0,0,11.775,12.4,12,12,0,0,0,12.225-12L403.5,581.5a23.5,23.5,0,1,1,47,0v225a12,12,0,0,0,24,0l-.12-510.154a23.5,23.5,0,0,1,47,0v332a47.5,47.5,0,0,0,95,0L616.5,499.5c0-19.426,15.628-36,35.053-36s34.947,14.574,34.947,34l-.121,131.846v-.5c0,26.234,23.886,46.654,50.12,46.654h-1c56,0,86.88-35.411,86.88-78.9s-55-74.75-76-89.75l51,39c-53.539-50.564-106.094-51.979-106.5-140.687-.329-71.712,57.735-131.784,129.448-131.813a128.961,128.961,0,0,1,82.053,29.271,128.961,128.961,0,0,1,82-29.271c71.521,0,129.115,57.981,129.5,129.5.41,76.323-58.366,104.93-93.831,132.634a86.277,86.277,0,0,0-30.861,46.956A69.161,69.161,0,0,0,987,599c0,43.492,32.38,76.846,81.38,76.846h-2.5a47.5,47.5,0,0,0,47.5-47.5l.12-128.846c0-19.606,15.774-36.654,35.38-36.654s35.62,17.048,35.62,36.654l-.12,128.846a47.5,47.5,0,0,0,48.312,47.494c26.044-.435,46.688-22.227,46.688-48.275V296.91c0-12.743,9.909-23.6,22.643-24.048a23.5,23.5,0,0,1,24.357,23.484L1327.5,805.5c0,6.351,5.029,12.346,11.38,12.346a11.5,11.5,0,0,0,11.5-11.5l.12-223.846c0-12.979,10.4-24.654,23.38-24.654A23.733,23.733,0,0,1,1397.5,581.5l-.119,153.346a12,12,0,0,0,12.225,12,12.26,12.26,0,0,0,11.775-12.4V652.894c0-13.126,10.74-24.247,23.865-24.045A23.737,23.737,0,0,1,1468.5,652.5l-.12,106.346a12,12,0,0,0,24,0l.24-106.5A24.125,24.125,0,0,1,1516.5,628.5h403" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="10"/></g></svg>
                    <h1>Hola!</h1>
                    <p>Se han puesto en contacto contigo nuevamente</p>
                </div>
                <div class="bodyC">
                    <ul>
                        <li>Nombre: ${data.nombre} </li>
                        <li>Tipo de documento: ${data.documentoTipo} </li>
                        <li>Documento: ${data.documento} </li>
                        <li>Celular: ${data.celular} </li>
                        <li>Asunto: ${data.asunto} </li>
                        <li>Mensage: ${data.mensaje} </li>
                    </ul>
                </div>
                
            </div>
        </body>
            </html>`


            },
            {headers: {"Accept": "application/json"}}
        )
        .then(function (response) {
            if (response.statusText === 'OK') {
                message.success("Gracias por comunicarse con nosotros, pronto nos pondremos en contacto.")
            }
          })
        .catch(function (error) {
            console.log(error);
          });
    }


    return(
        <>
        <SEO title="Contacto" />
        <Layout>
            <div className='mainContainerContact'>
                <div className='firstContact'>
                    <h1>Contactame</h1>
                    <div className='dataContact'>
                        <ul>
                            <li>Teléfonos: 320 9488078 - 6161808 </li>
                            <li>Email : <a href="mailto:Grobledoconsultas@gmail.com">Grobledoconsultas@gmail.com</a></li>
                        </ul>
                        <iframe className='map'  src={`https://www.google.com/maps/d/u/0/embed?mid=1_KWMChq1-CAP66OUFKKyDF_FHe6XkZlN&z=18`} frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <form  onSubmit={handleSubmit(onSubmit)} className={`${classes.root} formContact`}>
                        {/* name */}
                        <TextField 
                            name='nombre' 
                            inputRef={register({ required: true })} 
                            id="standard-basic" 
                            label="Nombre"
                            InputProps={{
                                className: classes.input,
                                classes: {
                                    root: classes.underline,
                                    error: classes.error
                                  }
                            }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.label,
                                    focused: classes.focusedLabel,
                                    error: classes.erroredLabel
                                  },
                            }}
                            SelectProps={{
                                native: true,
                            }}
                            helperText={errors.nombre ? "Por favor, inserte su nombre completo" : ''}/>

                        {/* tipo Document */}
                        <TextField
                            id="standard-select-currency-native"
                            name='documentoTipo'
                            select
                            label="Tipo de documento"
                            InputProps={{
                                className: classes.input,
                                classes: {
                                    root: classes.underline,
                                    error: classes.error
                                  }
                            }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.label,
                                    focused: classes.focusedLabel,
                                    error: classes.erroredLabel
                                  },
                            }}
                            inputRef={register({ required: true })} 
                            SelectProps={{
                                native: true,
                            }}
                            helperText={errors.documentoTipo ? "Por favor, seleccione su tipo de documento" : ''}>
                                <option disabled selected value="">{""}</option>
                                <option value="cedula">Cédula de ciudadania</option>
                                <option value="pasaporte">Pasaporte</option>
                        </TextField>
                        {/* Documento */}
                        <TextField 
                            name='documento' 
                            inputRef={register({ required: true })} 
                            id="standard-basic" 
                            label="Documento"
                            InputProps={{
                                className: classes.input,
                                classes: {
                                    root: classes.underline,
                                    error: classes.error
                                  }
                            }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.label,
                                    focused: classes.focusedLabel,
                                    error: classes.erroredLabel
                                  },
                            }}
                            SelectProps={{
                                native: true,
                            }}
                            helperText={errors.documento ? "Por favor, seleccione su tipo de documento" : ''}/>
                        {/* Celular */}
                        <TextField 
                            name='celular' 
                            inputRef={register} 
                            id="standard-basic" 
                            label="Celular"
                            InputProps={{
                                className: classes.input,
                                classes: {
                                    root: classes.underline,
                                    error: classes.error,
                                  }
                            }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.label,
                                    focused: classes.focusedLabel,
                                    error: classes.erroredLabel
                                  },
                            }}
                            SelectProps={{
                                native: true,
                            }}
                            />  
                        {/* Asunto */}
                        <TextField 
                            name='asunto' 
                            inputRef={register} 
                            id="standard-basic" 
                            label="Asunto"
                            InputProps={{
                                className: classes.input,
                                classes: {
                                    root: classes.underline,
                                    error: classes.error
                                  }
                            }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.label,
                                    focused: classes.focusedLabel,
                                    error: classes.erroredLabel
                                  },
                            }}
                            SelectProps={{
                                native: true,
                            }}
                            />  
                        {/* Mensaje */}
                        <TextField 
                            name='mensaje' 
                            inputRef={register({ required: true })}
                            id="standard-basic" 
                            label="Mensaje"
                            InputProps={{
                                className: classes.input,
                                classes: {
                                    root: classes.underline,
                                    error: classes.error
                                  }
                            }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.label,
                                    focused: classes.focusedLabel,
                                    error: classes.erroredLabel
                                  },
                            }}
                            SelectProps={{
                                native: true,
                            }}
                            helperText={errors.mensaje ? "Por favor, escriba su mensaje" : ''}/>  
                        <button type='submit' style={{cursor: "pointer"}} className='submitButton'>Enviar Mensaje</button>
                    </form>
                    
                </div>
            </div>
        </Layout>
        </>
    )
}

export default Contacto