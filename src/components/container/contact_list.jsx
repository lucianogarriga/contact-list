import React, {useState} from 'react'; 
import ContactItem from '../pure/contact';
import { Contact } from '../models/contact.class';

const ContactList = () => {

    const defaultContact = new Contact(
        "Mariano",
        "Gomez",
        true
    )

    function changeState(){
         
    }

    return (
        <div>
            <h2>Contact list</h2>
            <ContactItem contact={defaultContact} changeState={changeState}>Lista de Contactos</ContactItem>
        </div>
    );
}

export default ContactList;
