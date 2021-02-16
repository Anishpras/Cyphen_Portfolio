import React from "react";

import ContactForm from "../Components/ContactForm";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_top">
        <p>{`<html>`}</p>
        <p>{`<body>`}</p>
      </div>
      <div className="contact_mid">
        <ContactForm />
      </div>
      <div className="contact_bottom">
        <p>{`</body>`}</p>
        <p>{`</html>`}</p>
      </div>
    </div>
  );
};

export default Contact;
