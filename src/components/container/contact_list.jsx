import React, { useEffect, useState } from "react";
import ContactItem from "../pure/contact";
import { Contact } from "../models/contact.class";
import "../../styles/contact.scss";
import ContactForm from "../pure/contactForm";

const ContactList = () => {
  const defaultContact1 = new Contact("Mariano", "Gomez", true);
  const defaultContact2 = new Contact("Ariel", "Perez", true);
  // Estado inicial con useState
  const [contact, setContact] = useState([defaultContact1, defaultContact2]);
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

  const changeConnected = () => {
    console.log("MARCAR ESTADO DE CONTACTO");
  };

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
                  <th scope="col">Name</th>
                  <th scope="col">Surame</th>
                  <th scope="col">State</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: map sobre distintos contactos */}
                {contact.map((cont, index) => {
                  return <ContactItem key={index} contact={cont} />;
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
