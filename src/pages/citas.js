import React, {useState, useEffect} from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'
import locale from 'antd/es/locale/es_ES'
import { useForm } from 'react-hook-form';

//material UI 
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



//antd
import { Calendar ,TimePicker, message } from 'antd';

//axios
import axios from 'axios'



const Citas = () =>{

    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(0),
            width: '30vw',
          },
        },
    }));

    const { register, handleSubmit, watch, errors } = useForm();

    function  CalculateDate(time){
        var a = new Date((time * 1000));
        var year = a.getFullYear();
        var month = a.getMonth()+1;
        var date = a.getDate();
        if (month < 10) {
          month = '0' + month
        }
        if(date <10){
          date = '0' + date
        }
        time = date + '/' + month + '/' + year; 
        return time
      }
    function  CalculateTime(time){
        var a = new Date((time * 1000));
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        if(hour <10){
          hour = '0' + hour
        }
        if(min <10){
          min = '0' + min
        }
        if(sec <10){
          sec = '0' + sec
        }
        time =  hour + ':' + min + ':' + sec ;
        return time
      }


    const classes = useStyles();

    const onChangeCalendar = (value) => {
        setDate(CalculateDate(value/1000))
    }

    const onchangeTime = (value) => {
        setTime(CalculateTime(value/1000))
    }

    const CalculateTime2 = ()=>{
        var a = new Date((Date.now() ));
        var year = a.getFullYear();
        var month = a.getMonth()+1;
        var date = a.getDate();
        if(month<10){
          month = "0"+month
        }
        if(date<10){
          date = "0"+date
        }
      
        var dateString = date + '-' + month   + '-' + year + " 00:00",
        dateTimeParts = dateString.split(' '),
        timeParts = dateTimeParts[1].split(':'),
        dateParts = dateTimeParts[0].split('-'),
        date;
      
        var final = new Date(dateParts[2], parseInt(dateParts[1], 10) - 1, dateParts[0], timeParts[0], timeParts[1]);
        return (final.getTime());
      } 
    const onSubmit = data =>{
        data.fecha = date
        data.hora = time

        axios.post(
            "http://45.55.55.128:1337/citas",
            data,
            {headers: {"Accept": "application/json"}}
        ).then(res=>{
            message.loading({content: "Generando cita...", key: "updatable"})
            axios.post(
                "http://45.55.55.128:1337/email",
                {
                    'to' : `${data.correo}`,
                    'bcc' : "soporte@aidea.com.co",
                    'subject' : "Confimación de cita, Dr. Gabriel Robledo ",
                    'html' : 
            `<!DOCTYPE html
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
                            margin: 10px;
                            font-size: 1.5em;
                        }
                    </style>
                </head>
                <body >
                    <div class="mainContainer">
                        <div class="headerC">
                            <svg xmlns="http://www.w3.org/2000/svg" width="320" height="140" viewBox="0 0 1929.5 555.656"><g transform="translate(5 -267.844)"><path d="M0,628.5H355.5a24.125,24.125,0,0,1,23.88,23.846v82.1a12.26,12.26,0,0,0,11.775,12.4,12,12,0,0,0,12.225-12L403.5,581.5a23.5,23.5,0,1,1,47,0v225a12,12,0,0,0,24,0l-.12-510.154a23.5,23.5,0,0,1,47,0v332a47.5,47.5,0,0,0,95,0L616.5,499.5c0-19.426,15.628-36,35.053-36s34.947,14.574,34.947,34l-.121,131.846v-.5c0,26.234,23.886,46.654,50.12,46.654h-1c56,0,86.88-35.411,86.88-78.9s-55-74.75-76-89.75l51,39c-53.539-50.564-106.094-51.979-106.5-140.687-.329-71.712,57.735-131.784,129.448-131.813a128.961,128.961,0,0,1,82.053,29.271,128.961,128.961,0,0,1,82-29.271c71.521,0,129.115,57.981,129.5,129.5.41,76.323-58.366,104.93-93.831,132.634a86.277,86.277,0,0,0-30.861,46.956A69.161,69.161,0,0,0,987,599c0,43.492,32.38,76.846,81.38,76.846h-2.5a47.5,47.5,0,0,0,47.5-47.5l.12-128.846c0-19.606,15.774-36.654,35.38-36.654s35.62,17.048,35.62,36.654l-.12,128.846a47.5,47.5,0,0,0,48.312,47.494c26.044-.435,46.688-22.227,46.688-48.275V296.91c0-12.743,9.909-23.6,22.643-24.048a23.5,23.5,0,0,1,24.357,23.484L1327.5,805.5c0,6.351,5.029,12.346,11.38,12.346a11.5,11.5,0,0,0,11.5-11.5l.12-223.846c0-12.979,10.4-24.654,23.38-24.654A23.733,23.733,0,0,1,1397.5,581.5l-.119,153.346a12,12,0,0,0,12.225,12,12.26,12.26,0,0,0,11.775-12.4V652.894c0-13.126,10.74-24.247,23.865-24.045A23.737,23.737,0,0,1,1468.5,652.5l-.12,106.346a12,12,0,0,0,24,0l.24-106.5A24.125,24.125,0,0,1,1516.5,628.5h403" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="10"/></g></svg>
                            <h1>Hola!</h1>
                            <p>Me alegro que confies en mi para ayudarte.</p>
                            <p>Nos pondremos en contacto contigo pronto.</p>
                            <p>Estos son los datos de tu cita.</p>
                        </div>
                        <div class="bodyC">
                            <ul>
                                <li>Nombre: ${data.Paciente} </li>
                                <li>Documento: ${data.documento} </li>
                                <li>Tipo de consulta: ${data.tipo_de_consulta} </li>
                                <li>Fecha de la cita: ${data.fecha} --  ${data.hora} </li>
                            </ul>
                        </div>
                        
                    </div>
                </body>
            </html>`
            },
            {headers: {"Accept": "application/json"}}
            ).then(res=>{
                message.success({content: "Cita asignada correctamente", key: "updatable" , duration: 2})
                setTime("")
                setDate("")
            })
        })

    }
    return(
        <>
            <SEO title='Solicitar Cita'></SEO>
            <Layout>
                <div className='mainContainerCitas'>
                    <div className="firstCitas">
                        <form  onSubmit={handleSubmit(onSubmit)} className={`${classes.root} formAppo`}>
                            {/* name */}
                            <TextField 
                                name='Paciente' 
                                inputRef={register({ required: true })} 
                                id="standard-basic" 
                                label="Nombre completo"
                                SelectProps={{
                                    native: true,
                                }}
                                helperText={errors.Paciente ? "Por favor, inserte su nombre completo" : ''}/>

                            {/* Email */}
                            <TextField 
                                name='correo' 
                                inputRef={register({ required: true })} 
                                id="standard-basic" 
                                label="Correo electrónico"
                                SelectProps={{
                                    native: true,
                                }}
                                helperText={errors.correo ? "Por favor, inserte su correo" : ''}/>

                            {/* tipo Document */}
                            <TextField
                                id="standard-select-currency-native"
                                name='Tipo_Documento'
                                select
                                label="Tipo de documento"
                                inputRef={register({ required: true })} 
                                SelectProps={{
                                    native: true,
                                }}
                                helperText={errors.Tipo_Documento ? "Por favor, seleccione su tipo de documento" : ''}>
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
                                name='tipo_de_consulta'
                                select
                                label="Tipo de cita"
                                inputRef={register({ required: true })} 
                                SelectProps={{
                                    native: true,
                                }}
                                helperText={errors.tipo_de_consulta ? "Por favor, el servicio" : ''}>
                                    <option disabled selected value="">{""}</option>
                                    <option value="Consulta de cardiología">Consulta de cardiología</option>
                                    <option value="Consulta de cardio-oncología">Consulta de cardio-oncología</option>
                                    <option value="Electrocardiograma">Electrocardiograma</option>
                                    <option value="Prueba de esfuerzo">Prueba de esfuerzo</option>
                                    <option value="Ecocardiograma">Ecocardiograma</option>
                                    <option value="Ecocardiograma con estrés de ejercicio">Ecocardiograma con estrés de ejercicio</option>
                                    <option value="Monitoreo ambulatorio de presión arterial de 24H">Monitoreo ambulatorio de presión arterial de 24H</option>
                                    <option value="Test de holter 24H">Test de holter 24h</option>
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
                            <button style={{cursor: time !== "" ? "pointer" : "inherit"}} type='submit' disabled={time !== "" ? false : true} className='submitButtonCita'>Solicitar Cita</button>
                        </form>
                        <h1 className='chooseDay'>Escoge el día de tu cita </h1>
                        <div className='calendarDate'>
                            <Calendar  onChange={onChangeCalendar} locale={locale.Calendar}  fullscreen={false} disabledDate={(current)=> current.valueOf() < CalculateTime2()} />
                            <TimePicker disabledHours={()=>[0,1,2,3,4,5,6,7,8,17,18,19,20,21,22,23,24]}  onChange={onchangeTime}  className='horaElegir' size={"large"} placeholder='Elige tu hora' locale={locale.DatePicker} format='HH'></TimePicker>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )

}





export default Citas