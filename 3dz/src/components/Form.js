import React from 'react'
import './Form.css'

const Form = () => {
    return (
        < div className='form'>
            < form action='https://getform.io/f/c3bebbe1-7741-4c8b-aead-ff8ddede48e0' method='POST'>
                
                < input type='text'  placeholder='Nombre'name="name"></input>
                < input type='email' placeholder='Email'name="email"></input>
                < textarea name="message"  rows="10" placeholder='Mensaje'></ textarea>
                < button  type="submit" className='btn'>Submit</button>
            </ form>
        </ div>
    )
}

export default Form;