import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";
import "../../styles/contact.scss";

const ContactItem = ({ contact, connected, remove }) => {
  // useEffect p/ saber cuando editemos, modifiquemos un contact
  useEffect(() => {
    console.log("Contacto creado");
    return () => {
      console.log("Contacto eliminado");
    };
  }, [contact]);

//   State Function - Connected/Disconnected
  function stateContact(){
    if(contact.connected)  { 
        return (<button onClick={() => connected(contact)} style={{color: 'green', paddingLeft:'16px', paddingRight:'16px', fontWeight:'bold', cursor:'pointer' }}>Connected</button>)
    } else { 
        return (<button onClick={() => connected(contact)} style={{color: 'tomato', fontWeight:'bold' , cursor:'pointer' }}>Disconnected</button>)
    }
  }

  return (
    <tr className="fw-normal" >
      <td>
        <span className="align-middle" style={{ padding: "10px" }}> 
          {contact.name}
        </span>
      </td>
      <td>
        <span className="align-middle" style={{ padding: "10px" }}> 
          {contact.surname}
        </span>
      </td>
      <td>
        <span className="align-middle" >
          {stateContact()}
          <i onClick={() => remove(contact)} className="bi-trash" style={{color:'tomato', paddingLeft:"3px", cursor:'pointer'}}></i>
        </span>
      </td>
    </tr>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  connected: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default ContactItem;
