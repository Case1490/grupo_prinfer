import { useState } from "react";

const FaqQuestions = () => {
  const faqs = [
    {
      question: "¿Qué productos ofrece la distribuidora?",
      answer:
        "Ofrecemos una amplia gama de productos industriales, incluyendo herramientas, pinturas, equipos de seguridad, maquinaria, y más.",
    },
    {
      question: "¿Realizan envíos a todo el país?",
      answer:
        "Sí, realizamos envíos a nivel nacional, asegurándonos de que los productos lleguen en óptimas condiciones y en el menor tiempo posible.",
    },
    {
      question: "¿Ofrecen descuentos para compras al por mayor?",
      answer:
        "Sí, ofrecemos descuentos para compras al por mayor. Contacta a nuestro equipo de ventas para obtener más información sobre precios y descuentos especiales.",
    },
    {
      question: "¿Cómo puedo contactar a soporte técnico?",
      answer:
        "Nuestro equipo de soporte está disponible 24/7. Puedes contactarnos por teléfono, correo electrónico o a través de nuestro formulario en línea en la página de Contacto.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos pagos mediante transferencias bancarias, tarjetas de crédito y débito, y otras plataformas de pago electrónico para tu comodidad.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="faq-item"
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            <div
              className={`faq-answer ${activeIndex === index ? "open" : ""}`}
              style={{
                maxHeight: activeIndex === index ? "300px" : "0",
                overflow: "hidden",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqQuestions;
