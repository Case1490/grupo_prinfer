import ContactImage from '../assets/contacto.jpg'
import Map from './Map';

const Contact = () => {
  return (
    <>
      <div className=" min-h-screen flex items-center justify-center pt-[220px]">
        <div className="">
          <img
            src={ContactImage}
            alt="contacto"
            className="flex-1 imageContact"
          />
        </div>

        <div className="w-[40%]">
          <div className="flex-1">
            <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">
                Contáctanos
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" htmlFor="name">
                    Nombres
                  </label>
                  <input
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Escribe tus nombres"
                    type="text"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" htmlFor="name">
                    Apellidos
                  </label>
                  <input
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Escribe tus apellidos"
                    type="text"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" htmlFor="name">
                    Teléfono
                  </label>
                  <input
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Escribe número de teléfono"
                    type="text"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Escribe tu email"
                    name="email"
                    id="email"
                    type="email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-800 mb-1" htmlFor="message">
                    Mensaje
                  </label>
                  <textarea
                    className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300 resize-none"
                    rows="4"
                    placeholder="Escribe tu mensaje"
                    name="message"
                    id="message"
                  ></textarea>
                </div>
                <button
                  className="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300 text-xl"
                  type="submit"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Map/>
    </>
  );
}

export default Contact