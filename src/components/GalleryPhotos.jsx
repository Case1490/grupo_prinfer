import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";


// Importa las imágenes
import Abrasivos from "../assets/Abrasivos_Brocas.jpg";
import compo_electricos from "../assets/compo_electricos.jpg";
import PinturaAcabados from "../assets/Pintura_Acabados.png";
import epps from "../assets/epps.png";
import Herramientas from "../assets/Herramientas.jpg";
import envios from "../assets/envios.png";
import Limpieza from "../assets/Limpieza.png";
import Rodajes from "../assets/RODAJES.png";

const media = [
  { type: "image", src: Abrasivos },
  { type: "image", src: compo_electricos },
  { type: "image", src: envios },
  { type: "image", src: epps },
  { type: "image", src: Herramientas },
  { type: "image", src: PinturaAcabados },
  { type: "image", src: Limpieza },
  { type: "image", src: Rodajes },
];

const GalleryPhotos = () => {

  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-full" style={{ height: "auto" }}>
        {/* Altura automática */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {media.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <div className="w-full h-auto">
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={`Media ${index}`}
                    className="w-full h-auto object-cover"
                    style={{ userSelect: "none" }}
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="w-full h-full object-cover"
                    style={{ userSelect: "none" }}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryPhotos;
