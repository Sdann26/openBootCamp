import React from "react";
import ContactClass from "../models/contact.class";
import Status from "./Status";

const Container = () => {
  const contactDefault = new ContactClass(
    "Danilo",
    "Blas",
    "sdann_26@hotmail.com",
    true
  );

  console.log(contactDefault);

  return (
    <div>
      <span>
        {"Nombre: "}
        {contactDefault.name}
      </span>
      <br />
      <span>
        {"Apellidos: "}
        {contactDefault.lastname}
      </span>
      <br />
      <span>
        {"Correo: "}
        {contactDefault.email}
      </span>
      <br />
      <Status contact={contactDefault} />
    </div>
  );
};

export default Container;
