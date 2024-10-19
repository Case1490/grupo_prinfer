import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo_amarillo.png';
import IconPDF from '../assets/icon_pdf.png';

const Navbar = () => {
  return (
    <div className=" bg-GrayMain">
      <div className="w-[80%] m-auto py-4 flex items-center justify-between">
        <div className="w-[250px]">
          <img src={Logo} alt="Prinfer" className="w-full" />
        </div>

        <div>
          <div className="InputContainer">
            <input
              placeholder="Buscar productos..."
              id="input"
              className="input"
              name="text"
              type="text"
            />

            <label className="labelforsearch" htmlFor="input">
              <svg className="searchIcon" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
              </svg>
            </label>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[30px]">
            <img src={IconPDF} alt="Catálogo de Productos" className="w-full" />
          </div>

          <p>Catálogo de Productos</p>
        </div>
      </div>
      <div className=" bg-BlueDark text-white">
        <div className="w-[80%] m-auto flex">
          <NavLink to="/" className="link">
            INICIO
          </NavLink>
          <NavLink to="/productos" className="link">
            PRODUCTOS
          </NavLink>
          <NavLink to="/novedades" className="link">
            NOVEDADES
          </NavLink>
          <NavLink to="/nosotros" className="link">
            SOBRE NOSOTROS
          </NavLink>
          <NavLink to="/contacto" className="link">
            CONTACTO
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar