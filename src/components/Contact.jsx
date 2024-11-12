import { useState, useEffect } from "react";
import ContactImage from "../assets/contacto.jpg"; // Asegúrate de que la ruta sea correcta
import Map from "./Map";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.nombres) errors.nombres = "Nombres es requerido";
    if (!formData.apellidos) errors.apellidos = "Apellidos es requerido";
    if (!formData.telefono) {
      errors.telefono = "Teléfono es requerido";
    } else if (!/^\d+$/.test(formData.telefono)) {
      errors.telefono = "Teléfono debe contener solo números";
    }
    if (!formData.email) {
      errors.email = "Email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email es inválido";
    }
    if (!formData.mensaje) errors.mensaje = "Mensaje es requerido";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Establecer el estado de "Enviando..." antes de realizar el envío
      setIsSubmitting(true);

      // Realizar un pequeño retraso antes de enviar el formulario
      setTimeout(() => {
        // Ahora se envía el formulario
        e.target.submit(); // Enviar el formulario directamente
      }, 500); // Ajusta el tiempo si es necesario
    } else {
      alert("Por favor, complete correctamente todos los campos");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center pt-[220px]">
        {/* Imagen */}
        <div className="">
          <img
            src={ContactImage}
            alt="contacto"
            className="flex-1 imageContact"
          />
        </div>

        {/* Formulario */}
        <div className="w-[40%]">
          <div className="flex-1">
            <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
                Contáctanos
              </h2>
              <form
                onSubmit={handleSubmit}
                action="https://formsubmit.co/comercial1.prinfer@gmail.com"
                method="POST"
              >
                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" htmlFor="nombres">
                    Nombres
                  </label>
                  <input
                    className={`w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 ${
                      formErrors.nombres ? "ring-2 ring-red-500" : ""
                    }`}
                    placeholder="Escribe tus nombres"
                    type="text"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                  />
                  {formErrors.nombres && (
                    <p className="text-red-500 text-sm">{formErrors.nombres}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-800 mb-1"
                    htmlFor="apellidos"
                  >
                    Apellidos
                  </label>
                  <input
                    className={`w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 ${
                      formErrors.apellidos ? "ring-2 ring-red-500" : ""
                    }`}
                    placeholder="Escribe tus apellidos"
                    type="text"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                  />
                  {formErrors.apellidos && (
                    <p className="text-red-500 text-sm">
                      {formErrors.apellidos}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-800 mb-1"
                    htmlFor="telefono"
                  >
                    Teléfono
                  </label>
                  <input
                    className={`w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 ${
                      formErrors.telefono ? "ring-2 ring-red-500" : ""
                    }`}
                    placeholder="Escribe número de teléfono"
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                  {formErrors.telefono && (
                    <p className="text-red-500 text-sm">
                      {formErrors.telefono}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    className={`w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 ${
                      formErrors.email ? "ring-2 ring-red-500" : ""
                    }`}
                    placeholder="Escribe tu email"
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm">{formErrors.email}</p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" htmlFor="mensaje">
                    Mensaje
                  </label>
                  <textarea
                    className={`w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 resize-none ${
                      formErrors.mensaje ? "ring-2 ring-red-500" : ""
                    }`}
                    rows="4"
                    placeholder="Escribe tu mensaje"
                    name="mensaje"
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                  ></textarea>
                  {formErrors.mensaje && (
                    <p className="text-red-500 text-sm">{formErrors.mensaje}</p>
                  )}
                </div>

                <button
                  className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300 text-xl"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>

                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:5173/contacto"
                />
                <input type="hidden" name="_captcha" value="false" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Aquí está tu mapa o componente adicional */}
      <Map />
    </>
  );
};

export default Contact;
