import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-BlueDark text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Acerca de Nosotros</h4>
          <p className="text-sm">
            Somos una empresa peruana dedica y especializada en la distribucion
            de suministros industriales para los sectores de manufactura y
            otros. Tomando como punto de partida el dar soporte al area de
            logistica y compras, asistirlos y brindarles soluciones de manera
            inmediata.
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/productos" className="hover:underline">
                Productos
              </a>
            </li>
            <li>
              <a href="/servicios" className="hover:underline">
                Servicios
              </a>
            </li>
            <li>
              <a href="/soporte-tecnico" className="hover:underline">
                Soporte Técnico
              </a>
            </li>
            <li>
              <a href="/catalogo" className="hover:underline">
                Catálogo
              </a>
            </li>
            <li>
              <a href="/contacto" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Contacto</h4>
          <p className="text-md">
            123 Calle Industrial,
            <br />
            Ciudad, País
          </p>
          <p className="text-md">+51 917 279 856</p>
          <p className="text-md">
            <a
              href="mailto:comercial1.prinfer@gmail.com"
              className="hover:underline"
            >
              comercial1.prinfer@gmail.com
            </a>
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Suscríbete</h4>
          <p className="text-sm">
            Recibe nuestras últimas noticias y ofertas especiales.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="p-2 rounded-md text-black outline-none"
            />
            <button className="bg-YellowMain uppercase font-bold hover:bg-yellow-500 text-BlueDark py-2 px-4 rounded-md">
              Suscribirse
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
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
