import React, { useEffect, useState } from "react";
import ContactItem from "../pure/contact";
import { Contact } from "../models/contact.class";
import "../../styles/contact.scss";
import ContactForm from "../pure/contactForm";

const ContactList = () => {
  const defaultContact1 = new Contact("Mariano", "Gomez", true);
  const defaultContact2 = new Contact("Ariel", "Perez", true); 
  const defaultContact3 = new Contact("Eric", "Gutierrez", false);
  // Estado inicial con useState
  const [contact, setContact] = useState([]);
  // State Loading
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Estado del componente se ha modificado");
    setLoading(false);
    return () => {
      console.log("Componente de Lista de Contactos se desmontara");
    };
  }, [contact]);

  function connectedContact(cont){
    // Debemos obtener el index de cada contacto
    const index = contact.indexOf(cont);
    // Iremos almacenando en una var temporal cada uno de los contactos
    const tempContact = [...contact];
    // En la var temporal, en la posicion del index,
    // diremos que su propiedad 'connected' vamos a asignarle un nuevo valor
    // y a través del setter le pasaremos el valor contrar io
    tempContact[index].connected = !tempContact[index].connected 
    // Actualizamos el ESTADO del componente con la nueva lista
    // y se actualiza la iteracion de contactos
    setContact(tempContact)
  }

  function deletedContact(cont){
    console.log('Delete this contact: ', cont);
    const index = contact.indexOf(cont);
    const tempContact = [...contact];
    // Aplicamos el metodo splice p/ indicar que comience en la posicion del index,
    // y que elimine solo 1 elemento
    tempContact.splice(index,1)
    setContact(tempContact)
  }

  function addContact(cont) {
    const index = contact.indexOf(cont);
    const tempContact = [...contact];
    tempContact.push(cont)
    setContact(tempContact)
  }

  return (
    <>
      <h1 className="contact-title">Contact list</h1> 
        <div className="card">
          {/* Card Header */} 
          {/* Body - Content */}
          <div
            className="card-body"  
          >
            <table >
              <thead>
                <tr>
                  <th scope="col" className="col-3">Name</th>
                  <th scope="col" className="col-3">Surame</th>
                  <th scope="col" className="col-6">State</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: map sobre distintos contactos */}
                {contact.map((cont, index) => {
                  return <ContactItem key={index} contact={cont} connected={connectedContact} remove={deletedContact}/>;
                })}
              </tbody>
            </table>
          </div> 
      </div>
          <ContactForm add={addContact}/>
    </>
  );
};

export default ContactList;
