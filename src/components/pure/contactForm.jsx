import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

const ContactForm = ({add}) => {

    const nameRef = useRef("");
    const surnameRef = useRef("");
    // const connectedRef = useRef(false);

    function addContact(e){
        // evitamos que refresque la pagina
        e.preventDefault();
        // creamos una const de cada nuevo contact con sus props
        const newContact = new Contact(
            nameRef.current.value,
            surnameRef.current.value,
            false
        )
        // llamamos al metodo traido por props p/ agregar el nuevo contacto
        add(newContact)
    }

    return (

        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' placeholder='Insert the name' required/>
                </div>
                <div className='form-outline flex-fill'>
                <input ref={surnameRef} id='inputSurname' type='text' className='form-control form-control-lg' placeholder='Insert the surname' required/>
                </div>
            <button type='submit' className='btn btn-success btn-lg'>Add contact</button>
        </form>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
}

export default ContactForm;
