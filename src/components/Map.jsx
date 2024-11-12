
const Map = () => {
  return (
    <div className="w-[80%] m-auto flex flex-col items-center my-10">
      <h1 className="font-bold text-black text-4xl mt-4 mb-8 text-center md:text-left">
        Encuentra nuestra tienda en
      </h1>

      <div className=" flex flex-col items-center gap-y-4 lg:flex lg:flex-row lg:gap-y-0 gap-x-8 lg:items-start">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3899.585890777442!2d-76.9388143249362!3d-12.208555988041093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDEyJzMwLjgiUyA3NsKwNTYnMTAuNSJX!5e0!3m2!1ses!2spe!4v1729985032962!5m2!1ses!2spe"
            className="mapa"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-col justify-around items-center lg:gap-y-8">
          <p className="text-center text-lg mb-4">
            Visítanos en nuestra tienda física en
            <span className="font-semibold italic">Villa El Salvador</span>,
            donde encontrarás una amplia variedad de productos. Estamos ubicados
            en una zona accesible, cerca de puntos de referencia como el
            <span className="font-semibold italic">
              {" "}
              Monumento a la Mujer
            </span>{" "}
            .
          </p>

          <div className="text-center mt-4 space-y-2">
            <p>
              📞 Teléfono: +51 908 918 768 / +51 902 089 114 / +51 917 279 856
            </p>
            <p>📧 Correo: comercial1.prinfer@gmail.com</p>
            <p>🕒 Horario de atención: Lunes a Lunes, 24/7 siempre para ti!</p>
          </div>

          <div className="mt-4">
            <a
              href="https://maps.app.goo.gl/RdwzhgN2tnUoCs8h9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map