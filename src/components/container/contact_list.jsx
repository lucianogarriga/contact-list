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
  const [contact, setContact] = useState([defaultContact1, defaultContact2, defaultContact3]);
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
    // y a través del setter le pasaremos el valor contrario
    tempContact[index].connected = !tempContact[index].connected 
    setContact(tempContact)
  }

  return (
    <div>
      <h1 className="contact-title">Contact list</h1>
      <div className="col-12">
        <div className="card">
          {/* Card Header */}
          <div className="card-header p-3">
            <h3>Contacts</h3>
          </div>
          {/* Body - Content */}
          <div
            className="card-body"
            style={{ position: "relative", height: "100px" }}
          >
            <table>
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
                  return <ContactItem key={index} contact={cont} connected={connectedContact}/>;
                })}
              </tbody>
            </table>
          </div>
          <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
