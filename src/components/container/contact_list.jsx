import React, { useEffect, useState } from "react";
import ContactItem from "../pure/contact";
import { Contact } from "../models/contact.class";

const ContactList = () => {
  const defaultContact1 = new Contact("Mariano", "Gomez", false);
  // Estado inicial con useState
  const [contact, setContact] = useState([defaultContact1]);
  // State Loading
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Estado del componente se ha modificado");
    setLoading(false)
    return () => {
      console.log("Componente de Lista de Contactos se desmontara");
    };
  }, [contact]);

  const changeConnected = () => {
    console.log("MARCAR ESTADO DE CONTACTO");
  };

  return (
    <div>
      <h2>Contact list</h2>
      <ContactItem contact={defaultContact1} />
    </div>
  );
};

export default ContactList;
