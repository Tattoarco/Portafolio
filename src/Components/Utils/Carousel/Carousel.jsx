import React, { useState } from "react";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Iniciar con la primera card activa

  const cards = [
    {
      id: 0,
      title: "UI Project 1",
      images: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      text: "Descripción breve del proyecto de UI 1.",
    },
    {
      id: 1,
      title: "UI/UX Project 2",
      images: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      text: "Descripción breve del proyecto de UI/UX 2.",
    },
    {
      id: 2,
      title: "UX Project 3",
      images: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      text: "Descripción breve del proyecto de UX 3.",
    },
    {
      id: 3,
      title: "Design Project 4",
      images: [
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
        "https://via.placeholder.com/100x100",
      ],
      text: "Descripción breve del proyecto de Diseño 4.",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full overflow-hidden flex flex-col md:flex-row items-center">
      {/* Botón anterior */}
      <button
        onClick={handlePrev}
        className="absolute left-2 md:left-5 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-900 transition duration-300 text-2xl z-20"
      >
        &lt;
      </button>

      <div className="flex w-full justify-center px-2 md:px-10">
        {/* Cards con imágenes múltiples */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`transition-all duration-500 ease-in-out p-4 rounded-lg ${
                index === activeIndex
                  ? "transform scale-105 bg-white shadow-lg z-10"
                  : "transform scale-95 bg-gray-300"
              }`}
              style={{
                width: "250px",
                height: "350px",
              }}
            >
              {/* Imágenes múltiples dentro de la card */}
              <div className="grid grid-cols-3 gap-2 mb-2">
                {card.images.map((imgSrc, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imgSrc}
                    alt={`img-${imgIndex}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Descripción al lado de la card activa */}
      <div className="w-full md:w-1/3 text-center md:text-left mt-4 md:mt-0 px-4">
        <h3 className="text-2xl font-bold text-gray-700">{cards[activeIndex].title}</h3>
        <p className="mt-2 text-sm md:text-base text-gray-600">{cards[activeIndex].text}</p>
      </div>

      {/* Botón siguiente */}
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-5 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-900 transition duration-300 text-2xl z-20"
      >
        &gt;
      </button>
    </div>
  );
};

export { Carousel };
