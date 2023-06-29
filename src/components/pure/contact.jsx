import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

const ContactItem = ({contact}) => {
 
    // useEffect p/ saber cuando editemos, modifiquemos un contact
    useEffect(() => {
        console.log('Contacto creado');
        return () => {
            console.log('Contacto eliminado');
        };
    }, [contact]);
 
    return (
        <div> 
           <h3>Contact name: {contact.name} {contact.surname}</h3> 
           <h3>This contact is: {contact.connected ? 'CONNECTED' : 'DISCONNECTED'} </h3> 
           
        </div>
    );
}

ContactItem.propTypes ={ 
    contact: PropTypes.instanceOf(Contact)
}

export default ContactItem;
