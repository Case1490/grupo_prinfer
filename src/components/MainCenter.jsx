import CardsContainer from "./CardsContainer"
import GalleryPhotos from "./GalleryPhotos"
import NewProducts from "./NewProducts";
import RecommendedProducts from "./RecommendedProducts";

// IMPORTANDO IMAGENES
import image1 from '../assets/productosOriginales.png';
import image2 from "../assets/certificacionCalidad.png";
import image3 from "../assets/productoLimpieza.png";
import image4 from "../assets/pinturasIndustriales.png";
import image5 from "../assets/HerramientasProfesionales.png";
import image6 from "../assets/ComponentesElectricos.png";


const MainCenter = () => {
  return (
    <div className="pt-[140px]">
      <GalleryPhotos />
      <div className="">
        <div className="w-[80%] m-auto my-6 space-y-10">
          <CardsContainer />
          <NewProducts />
          <div className="flex gap-4">
            <div>
              <img src={image1} alt="" className="w-full rounded-lg" />
            </div>

            <div>
              <img src={image2} alt="" className="w-full rounded-lg" />
            </div>
          </div>
          <RecommendedProducts />

          <div className="flex gap-4">
            <div>
              <img src={image3} alt="" className="w-full rounded-lg" />
            </div>

            <div>
              <img src={image4} alt="" className="w-full rounded-lg" />
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <img src={image5} alt="" className="w-full rounded-lg" />
            </div>

            <div>
              <img src={image6} alt="" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCenter