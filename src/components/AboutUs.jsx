import { useEffect } from 'react';
import Nacimiento from '../assets/seccion_sobrenosotros/nacimiento.jpg';
import CardVision from './CardVision';
import GoalsFuture from './GoalsFuture';
import FaqQuestions from './FaqQuestions';

const AboutUs = () => {
  // Código para que nos lleve al inicio de la página
  useEffect(() => {
    window.scrollTo(0, 0); // Desplazarse hacia el inicio
  }, []);

  return (
    <div className=" min-h-screen flex items-center justify-center w-[80%] m-auto pt-[140px]">
      <div className="my-10">
        <h1 className="text-4xl font-bold text-center mb-14">
          Te invitamos a conocernos un poco más
        </h1>

        <div className="flex gap-x-4 justify-around">
          <div className="text-center w-[50%] grid place-content-center bg-BlueDark text-white px-4 rounded-lg">
            <h1 className="text-3xl font-bold mb-4">
              ¿Cómo nació Grupo Prinfer?
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At magnam
              modi, nihil quod quaerat perspiciatis! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Non, accusamus. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. At magnam modi, nihil quod
              quaerat perspiciatis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Non, accusamus.sit amet consectetur adipisicing
              elit. At magnam modi, nihil quod quaerat perspiciatis! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Non, accusamus.
            </p>

            <a
              href="#"
              className="inline-block text-black mt-4 px-4 py-2 rounded-full font-bold uppercase w-[150px] bg-GrayMain transition-all ease-out m-auto"
            >
              Contáctanos
            </a>
          </div>

          <div className="">
            <div className="w-[400px]">
              <img src={Nacimiento} alt="DistribuidoraPrinfer" />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl font-bold text-center mb-4">
            Nuestra Misión, Visión y Valores
          </h1>

          <div>
            <CardVision />
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl font-bold text-center mb-8">
            Nuestros planes a Futuro
          </h1>

          <div>
            <GoalsFuture />
          </div>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl font-bold text-center mb-8">
            Preguntas Frequentes
          </h1>

          <div>
            <FaqQuestions />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs