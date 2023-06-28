import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

const ContactItem = ({contact, changeState}) => {
    return (
        <div> 
           <h3>Contact name: {contact.name} {contact.surname}</h3> 
           <h3>Contact state: {contact.connected ? 'CONNECTED' : 'DISCONNECTED'}</h3>
           <button onClick={changeState}>Change State</button>
        </div>
    );
}

ContactItem.propTypes ={ 
    contact: PropTypes.instanceOf(Contact)
}

export default ContactItem;
