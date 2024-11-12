import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import MapIcon from "../icons/MapIcon";
import EmailIcon from "../icons/EmailIcon";
import Phone from "../icons/Phone";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular un envío con setTimeout (puedes reemplazarlo con tu lógica de backend)
    setTimeout(() => {
      alert("¡Te has suscrito exitosamente!");
      setIsSubmitting(false);
      setEmail(""); // Limpiar el campo de email después de la suscripción
    }, 2000); // Simular 2 segundos de espera para el envío
  };

  return (
    <footer className="bg-BlueDark text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4 mx-4 text-center md:mx-0 md:text-left">
          <h4 className="text-2xl font-semibold">Acerca de Nosotros</h4>
          <p className="text-sm">
            Somos una empresa peruana dedicada y especializada en la
            distribución de suministros industriales para los sectores de
            manufactura y otros. Tomando como punto de partida el dar soporte al
            área de logística y compras, asistirlos y brindarles soluciones de
            manera inmediata.
          </p>
        </div>
        <div className="space-y-4 flex flex-col items-center">
          <h4 className="text-2xl font-semibold">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-lg text-center">
            <li>
              <Link to="/" className="hover:underline">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/productos" className="hover:underline">
                Productos
              </Link>
            </li>
            <li>
              <Link to="/novedades" className="hover:underline">
                Novedades
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:underline">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:underline">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4 flex flex-col items-center  md:items-start">
          <h4 className="text-2xl font-semibold">Contacto</h4>
          <p className="text-md flex">
            <MapIcon />
            Villa El Salvador <br />
            Lima, Perú
          </p>
          <div className="space-y-2">
            <p className="text-md flex items-center space-x-2">
              <Phone /> +51 917 279 856
            </p>
            <p className="text-md flex items-center space-x-2">
              <Phone /> +51 902 089 114
            </p>
            <p className="text-md flex items-center space-x-2">
              <Phone /> +51 908 918 768
            </p>
          </div>

          <p className="text-md flex items-center gap-x-2">
            <EmailIcon /> comercial1.prinfer@gmail.com
          </p>
        </div>
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-2xl font-semibold">Suscríbete</h4>
          <p className="text-sm">
            Recibe nuestras últimas noticias y ofertas especiales.
          </p>
          <form
            className="flex flex-col space-y-2 mx-2 md:mx-0"
            onSubmit={handleSubmit}
            action="https://formsubmit.co/comercial1.prinfer@gmail.com"
            method="POST"
          >
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Tu correo electrónico"
              className="p-2 rounded-md text-black outline-none"
              required
            />
            <button
              type="submit"
              className="bg-YellowMain uppercase font-bold hover:bg-yellow-500 text-BlueDark py-2 px-4 rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Suscribirse"}
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
      <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          Distribuidora Prinfer © 2024. Todos los derechos reservados.
        </p>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="#" className="hover:text-YellowMain">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="hover:text-YellowMain">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="hover:text-YellowMain">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
