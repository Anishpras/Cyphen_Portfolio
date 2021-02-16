import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ContactForm = () => {
  const { register, errors, handleSubmit, reset } = useForm();
  const [disabled, setDisabled] = useState(false);

  const toastifySuccess = () => {
    toast("Message sent!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    try {
      setDisabled(true);
      const templateParams = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      };
      console.log("clicked");

      await emailjs.send(
        "service_cyphen",
        "template_cyphen",
        templateParams,
        "user_tyXS0Bp77AA2dojDUXUsX"
      );

      reset();
      toastifySuccess();
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="contact">
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          type="text"
          name="name"
          ref={register({
            required: {
              value: true,
              message: "Please enter your name",
            },
            maxLength: {
              value: 30,
              message: "Please use 30 characters or less",
            },
          })}
          className="contactForm_input"
          placeholder="Name"></input>
        {errors.name && (
          <span className="errorMessage">{errors.name.message}</span>
        )}

        <input
          type="email"
          name="email"
          ref={register({
            required: true,
            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          })}
          className="contactForm_input"
          placeholder="Email address"></input>
        {errors.email && (
          <span className="errorMessage">
            Please enter a valid email address
          </span>
        )}

        <input
          type="text"
          name="subject"
          ref={register({
            required: {
              value: true,
              message: "Please enter a subject",
            },
            maxLength: {
              value: 75,
              message: "Subject cannot exceed 75 characters",
            },
          })}
          className="contactForm_input"
          placeholder="Subject"></input>
        {errors.subject && (
          <span className="errorMessage">{errors.subject.message}</span>
        )}

        <textarea
          rows={3}
          name="message"
          ref={register({
            required: true,
          })}
          className="contactForm_input"
          placeholder="Message"></textarea>
        {errors.message && (
          <span className="errorMessage">Please enter a message</span>
        )}

        <button
          className="contactForm_button"
          disabled={disabled}
          type="submit">
          Submit
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default ContactForm;
