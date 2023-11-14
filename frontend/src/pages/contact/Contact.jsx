import { useState } from "react";
import Coolitude from "../../components/coolitude/Coolitude";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./_contact.scss";

function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [objectError, setObjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isMailSent, setIsMailSent] = useState(false);

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((([^<>()[\]\\.,;:\s@]+\.)+[^<>()[\]\\.,;:\s@]{2,}))$/;

  const validateEmail = () => {
    if (mail) {
      if (emailRegex.test(mail)) {
        setEmailError("");
        return true;
      }
      setEmailError("Veuillez saisir une adresse mail valide");
      return false;
    }
    setEmailError("Veuillez saisir une adresse mail");
    return false;
  };

  const validateName = () => {
    if (!name) {
      setNameError("Veuillez saisir votre nom");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateObject = () => {
    if (!object) {
      setObjectError("Veuillez saisir l'objet de votre message");
      return false;
    }
    setObjectError("");
    return true;
  };

  const validateMessage = () => {
    if (message.length < 20) {
      setMessageError("Le message doit comporter au moins 20 caractères");
      return false;
    }
    setMessageError("");
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isObjectValid = validateObject();
    const isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isObjectValid && isMessageValid) {
      setIsMailSent(true);
    }
  };

  const handleReset = () => {
    setIsFormSubmitted(false);
    setIsMailSent(false);
    setName("");
    setMail("");
    setObject("");
    setMessage("");
    setEmailError("");
    setNameError("");
    setObjectError("");
    setMessageError("");
  };

  const renderPopup = () => {
    return (
      <div className="custom-popup">
        <p>Mail envoyé avec succès !</p>
        <button
          type="button"
          className="close-btn"
          onClick={() => setIsMailSent(false)}
        >
          OK
        </button>
      </div>
    );
  };

  return (
    <>
      <Coolitude />
      <Navbar />
      <div className="contact">
        <form
          className="formInput"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <label className="floatingLabel">
            {" "}
            Nom{" "}
            <input
              type="text"
              className="floatingInput"
              title="Merci de renseigner votre nom"
              value={name}
              onChange={(event) => setName(event.target.value)}
              onBlur={() => isFormSubmitted && validateName()}
            />
            {isFormSubmitted && nameError && (
              <p className="errorMessage">{nameError}</p>
            )}
          </label>

          <label className="floatingLabel">
            {" "}
            Email{" "}
            <input
              type="text"
              className="floatingInput"
              value={mail}
              onChange={(event) => setMail(event.target.value)}
              onBlur={() => isFormSubmitted && validateEmail()}
            />
            {(!isFormSubmitted || (isFormSubmitted && emailError)) && (
              <p className="errorMessage">{emailError}</p>
            )}
          </label>

          <label className="floatingLabel">
            {" "}
            Objet{" "}
            <input
              type="text"
              className="floatingInput"
              value={object}
              onChange={(event) => setObject(event.target.value)}
              onBlur={() => isFormSubmitted && validateObject()}
            />
            {isFormSubmitted && objectError && (
              <p className="errorMessage">{objectError}</p>
            )}
          </label>

          <textarea
            name="textarea"
            rows="10"
            cols="50"
            placeholder="Votre message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onBlur={() => isFormSubmitted && validateMessage()}
          />
          {isFormSubmitted && messageError && (
            <p className="errorMessage">{messageError}</p>
          )}

          <button type="submit" className="contactBtn" disabled={isMailSent}>
            Envoyer
          </button>
        </form>
      </div>

      {isMailSent && renderPopup()}

      <Footer />
    </>
  );
}

export default Contact;
