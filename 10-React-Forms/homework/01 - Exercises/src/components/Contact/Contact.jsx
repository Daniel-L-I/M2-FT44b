import React from "react";
import "./Contact.modules.css";
// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

function validate(inputs) {
  let errors = {};
  if (!inputs.name) {
    errors.name = "Se requiere un nombre";
  }
  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (!inputs.massage) {
    errors.massage = "Se requiere un mensaje";
  }
  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    name: "",
    email: "",
    massage: "",
  });

  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    massage: "",
  });

  const handleChange = (evento) => {
    setInputs({ ...inputs, [evento.target.name]: evento.target.value });
    setErrors(
      validate({
        ...inputs,
        [evento.target.name]: evento.target.value,
      })
    );
  };

  const handleSubmit = (evento) => {
    event.preventDefault(); //! Evitar que el formulario se envíe por defecto

    const validationErrors = validateInputs(); 
    setErrors(validationErrors); 

    if (errors.length === 0) {
      alert('Datos completos');
      setInputs({
        name: "",
        email: "",
        massage: "",
        // Resetear más campos si es necesario
      });
    } else {
      alert('Debe llenar todos los campos');
    }
  };

  return (
    <form>
      <label>Nombre:</label>
      <input
        className={errors.name && "warning"}
        type="text"
        name="name"
        placeholder="Escribe tu nombre..."
        value={inputs.name}
        onChange={handleChange}
      />
      <p className="danger">{errors.name}</p>

      <label>Correo Electrónico:</label>
      <input
        className={errors.email && "warning"}
        type="text"
        name="email"
        placeholder="Escribe tu email..."
        value={inputs.email}
        onChange={handleChange}
      />
      <p className="danger">{errors.email}</p>

      <label>Mensaje:</label>
      <textarea
        className={errors.message && "warning"}
        name="message"
        placeholder="Escribe tu mensaje..."
        value={inputs.message}
        type="text"
        onChange={handleChange}
      />
      <p className="danger">{errors.message}</p>

      <button type="submit" onSubmit={handleSubmit}>Enviar</button>
    </form>
  );
}
