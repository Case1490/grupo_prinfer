import Nacimiento from '../assets/seccion_sobrenosotros/nacimiento.jpg';
import Card from '../helpers/Card';

const AboutUs = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center w-[80%] m-auto">
      <div>
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

        <div>
          <h1>Nuestra Misión, Visión y Valores</h1>

          <div>
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs