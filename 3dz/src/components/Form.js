import React, { useState } from 'react'
import axios from 'axios'
import './Form.css'

const FormOld = () => {
    return (
        <div className='form'>
            <form action='https://getform.io/f/c3bebbe1-7741-4c8b-aead-ff8ddede48e0' method='POST'>
                
                <input type='text'  placeholder='Nombre'name="name"></input>
                <input type='email' placeholder='Email'name="email"></input>
                <input type='number' placeholder='Teléfono'name="number"></input>
                <textarea name="message"  rows="10" placeholder='Mensaje'></ textarea>
                <button  type="submit" className='btn'>Enviar</button>
            </form>
        </div>
    )
}

function Form(){

    const [nombre, setNombre ] = useState('')
    const [telefono, setTelefono ] = useState('')
    const [email, setEmail ] = useState('')
    const [message, setMessage ] = useState('')

    const [btnStatus, setBtnStatus ] = useState(true)
    const [loading, setLoading ] = useState(false)
    const [sendStatus, setSendStatus ] = useState(0)



    async function enviarMail(){
        setLoading(true)

        const obj = {
          'name':nombre,
          'number':telefono,
          'email':email,
          'message':message,

        }

        console.log('enviando > ', obj)
        await axios.post(`https://getform.io/f/c3bebbe1-7741-4c8b-aead-ff8ddede48e0`, obj)
        .then((response) => {
    
        //   let res = response.data;
          console.log('res',response)

            setLoading(false)
            setSendStatus(1)
    
        }, (error) => {
          console.log('no volvió D: > ', error)
          setSendStatus(2)
        });
    }

    function chequeaElBoton(){

        if(nombre.length > 3 && telefono.length > 3 && email.length > 10){
            setBtnStatus(false)
            console.log('esta todo Ok')
        }else{
            console.log('hay campos sin completar')
        }

    }

    return(
        <div className='form'>
            <h1>Contactanos</h1>
            <input type='text' placeholder='Nombre' name="name" value={nombre} onChange={(e)=> { setNombre(e.target.value); chequeaElBoton() }} />
            <input type='email' placeholder='Email' name="email" value={email} onChange={(e)=> { setEmail(e.target.value); chequeaElBoton() }} />
            <input type='number' placeholder='Teléfono' name="number" value={telefono} onChange={(e)=> { setTelefono(e.target.value); chequeaElBoton() }} />
            <textarea  rows="10" placeholder='Mensaje' name="message" value={message} onChange={(e)=> { setMessage(e.target.value); chequeaElBoton() }} />
            
            <MailStatus status={sendStatus}/>

            {loading ? 
                <button className='btn'>Enviando...</button>
                :
                <button className='btn' disabled={btnStatus} onClick={()=> enviarMail()}>{btnStatus ? 'completa los campos' : 'Enviar'}</button>
            }

        </div>
    )
}

    function MailStatus({status}){
        if (status === 0) return null

        if (status === 1) return(
            <div className='MailStatus success'>
                <h4>¡Mensaje enviado!</h4>
            </div>
        )

        if (status === 2) return(
            <div className='MailStatus abort'>
                <h4>Algo salio mal</h4>
            </div>
        )

    }

export default Form;