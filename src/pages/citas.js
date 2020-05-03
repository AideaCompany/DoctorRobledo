import React, {useState, useEffect} from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import locale from 'antd/es/locale/es_ES'
import { useForm } from 'react-hook-form';

//material UI 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



//antd
import { Calendar ,TimePicker } from 'antd';

//axios
import axios from 'axios'



const Citas = () =>{

    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '30vw',
          },
        },
    }));

    const { register, handleSubmit, watch, errors } = useForm();
    const classes = useStyles();
    const onChangeCalendar = (value) => {
        console.log(value._d.getDate())
    }
    const onSubmit = data =>{
        console.log(data)
    }
    // const disabledDate = current =>{
    //     console.log(current)
    return(
        <>
            <SEO title='Solicitar Cita'></SEO>
            <Layout>
                <div className='mainContainerCitas'>
                    <div className="firstCitas">
                        <form  onSubmit={handleSubmit(onSubmit)} className={`${classes.root} formAppo`}>
                            {/* name */}
                            <TextField 
                                name='nombre' 
                                inputRef={register({ required: true })} 
                                id="standard-basic" 
                                label="Nombre completo"
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
                            
                            {/* tipo de cita */}
                            <TextField
                                id="standard-select-currency-native"
                                name='documentoTipo'
                                select
                                label="Tipo de cita"
                                inputRef={register({ required: true })} 
                                SelectProps={{
                                    native: true,
                                }}
                                helperText={errors.documentoTipo ? "Por favor, el servicio" : ''}>
                                    <option disabled selected value="">{""}</option>
                                    <option value="consulta-cardiologia">Consulta de cardiología</option>
                                    <option value="consulta-cardio-oncologia">Consulta de cardio-oncología</option>
                                    <option value="electrocardiograma">Electrocardiograma</option>
                                    <option value="prueba-esfuerzo">Prueba de esfuerzo</option>
                                    <option value="ecocardiograma">Ecocardiograma</option>
                                    <option value="ecocardiograma-estrés">Ecocardiograma con estrés de ejercicio</option>
                                    <option value="monitoreo-ambularotio-24h">Monitoreo ambulatorio de presión arterial de 24H</option>
                                    <option value="test-holter-24h">Test de holter 24h</option>
                                ))}
                            </TextField>

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
                            <button type='submit' className='submitButtonCita'>Solicitar Cita</button>
                        </form>
                        <h1 className='chooseDay'>Escoge el día de tu cita </h1>
                        <div className='calendarDate'>
                            <Calendar  onChange={onChangeCalendar} locale={locale.Calendar} fullscreen={false}></Calendar>
                            <TimePicker  className='horaElegir' size={"large"} placeholder='Elige tu hora' locale={locale} format='HH:mm'></TimePicker>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )

}


export default Citas