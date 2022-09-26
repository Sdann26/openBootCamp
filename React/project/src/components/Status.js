import React from "react";
import PropTypes from "prop-types";
import contactClass from "../models/contact.class";

const Status = ({ contact }) => {
  return (
    <span>
      {"Estado: "}
      {contact.online ? "Contacto En Línea" : "Contacto No Disponible"}
    </span>
  );
};

Status.propTypes = {
  contact: PropTypes.instanceOf(contactClass),
};

export default Status;
