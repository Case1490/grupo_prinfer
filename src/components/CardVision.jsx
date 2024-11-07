import Vision from '../assets/seccion_sobrenosotros/vision.jpg';
import Mision from "../assets/seccion_sobrenosotros/mision.jpg";
import Valores from "../assets/seccion_sobrenosotros/valores.jpg";

const CardVision = () => {
  return (
    <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-2 md:grid-cols-3 md:gap-x-4">
      <div className="cardVision">
        <div className="contentAboutUs">
          <h2 className=" text-xl sm:text-3xl font-bold mb-2 uppercase">
            Misión
          </h2>
          <p className="text-sm">
            Proveer productos industriales de alta calidad y tecnología,
            ofreciendo soluciones confiables y personalizadas para satisfacer
            las necesidades de nuestros clientes, garantizando eficiencia,
            seguridad y un servicio ágil y profesional
          </p>
        </div>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${Mision})` }}
        ></div>
      </div>

      <div className="cardVision">
        <div className="contentAboutUs">
          <h2 className=" text-xl sm:text-3xl font-bold mb-2 uppercase">
            Visión
          </h2>
          <p className="text-sm">
            Ser la distribuidora líder en el sector industrial, reconocida por
            la calidad de nuestros productos, la innovación constante y nuestro
            compromiso con el crecimiento de los clientes, contribuyendo al
            desarrollo sostenible del mercado
          </p>
        </div>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${Vision})` }}
        ></div>
      </div>

      <div className="cardVision">
        <div className="contentAboutUs">
          <h2 className=" text-xl sm:text-3xl font-bold mb-2 uppercase">
            Valores
          </h2>
          <p className="text-sm">
            Compromiso con la calidad, innovación continua, responsabilidad
            social y ambiental, integridad en las relaciones comerciales,
            excelencia en el servicio al cliente y trabajo en equipo para lograr
            la satisfacción total de nuestros clientes
          </p>
        </div>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${Valores})` }}
        ></div>
      </div>

      
    </div>
  );
};

export default CardVision;
