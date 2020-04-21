import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'

//material UI 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

//form
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '40vw',
      },
    },
  }));

const Contacto = () =>{

    const classes = useStyles();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data ,  errors)}

    return(
        <>
        <SEO title="Contacto" />
        <Layout>
            <div className='mainContainerContact'>
                <div className='firstContact'>
                    <h1>Contactame</h1>
                    <div className='dataContact'>
                        <ul>
                            <li>Teléfonos:  #########</li>
                            <li>Email : ##########</li>
                        </ul>

                        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15906.331500570062!2d-74.0568116!3d4.668211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4eedb045e905b2a0!2sCentro%20Cardiol%C3%B3gico%20de%20Bogot%C3%A1%20ltda!5e0!3m2!1ses!2sco!4v1587397182486!5m2!1ses!2sco" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                    </div>
                    <form  onSubmit={handleSubmit(onSubmit)} className={`${classes.root} formContact`}>
                        {/* name */}
                        <TextField 
                            name='nombre' 
                            inputRef={register({ required: true })} 
                            id="standard-basic" 
                            label="Nombre"
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
                            inputRef={register({ required: true })} 
                            SelectProps={{
                                native: true,
                            }}
                            helperText={errors.documentoTipo ? "Por favor, seleccione su tipo de documento" : ''}>
                                <option disabled selected value="">{""}</option>
                                <option value="cedula">Cédula de ciudadania</option>
                                <option value="pasaporte">Pasaporte</option>
                            ))}
                        </TextField>
                        {/* Documento */}
                        <TextField 
                            name='documento' 
                            inputRef={register({ required: true })} 
                            id="standard-basic" 
                            label="Documento"
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
                            SelectProps={{
                                native: true,
                            }}
                            helperText={errors.mensaje ? "Por favor, escriba su mensaje" : ''}/>  
                        <button type='submit' className='submitButton'>Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </Layout>
        </>
    )
}

export default Contacto