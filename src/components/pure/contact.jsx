import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";
import "../../styles/contact.scss";

const ContactItem = ({ contact }) => {
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
        return (<span style={{color: 'green', fontWeight:'bold'}}>CONNECTED</span>)
    } else { 
        return (<span style={{color: 'red', fontWeight:'bold'}}>DISCONNECTED</span>)
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
        <span className="align-middle" style={{ padding: "10px" }}>
          {stateContact()}
          <i className="bi-trash" style={{color:'tomato', paddingLeft:"10px"}}></i>
        </span>
      </td>
    </tr>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactItem;
