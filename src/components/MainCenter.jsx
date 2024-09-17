import CardsContainer from "./CardsContainer"
import GalleryPhotos from "./GalleryPhotos"
import NewProducts from "./NewProducts";
import RecommendedProducts from "./RecommendedProducts";

// IMPORTANDO IMAGENES
import image1 from '../assets/productosOriginales.png';
import image2 from "../assets/certificacionCalidad.png";


const MainCenter = () => {
  return (
    <div>
      <GalleryPhotos />
      <div className="">
        <div className="w-[80%] m-auto mt-6 space-y-10">
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
        </div>
      </div>
    </div>
  );
}

export default MainCenter