import React from "react";

export default function SliderForm({
  slides,
  handleChange,
  toggleBlur,
  removeSlide,
}) {
  return (
    <div>
      {slides.map((slide, index) => (
        <div key={index} className="flex text- z-50 sm:flex-row mx-auto justify-center   flex-col gap-4 items-center">
          <h3 className="font-bold sm:text-xl">Slider {index + 1}</h3>
          <input
            type="text"
            placeholder="Background Image"
            value={slide.backgroundImage}
            className=" w-48 sm:w-72 rounded  text-white placeholder:text-white h-10 bg-red-500"
            onChange={(e) =>
              handleChange(index, "backgroundImage", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Main Image"
            value={slide.mainImage}
            className=" w-48 sm:w-72 rounded text-white placeholder:text-white h-10 bg-red-500"
            onChange={(e) => handleChange(index, "mainImage", e.target.value)}
          />
          <input
            type="text"
            placeholder="Main text"
            value={slide.mainText}
            className=" w-48 sm:w-72 rounded text-white placeholder:text-white h-10 bg-red-500"
            onChange={(e) => handleChange(index, "mainText", e.target.value)}
          />
          <input
            type="text"
            placeholder="Sub text"
            value={slide.subText}
            className=" w-48 sm:w-72 rounded text-white placeholder:text-white h-10 bg-red-500"
            onChange={(e) => handleChange(index, "subText", e.target.value)}
          />
          <input
            type="text"
            placeholder="Button text"
            value={slide.buttonText}
            className=" w-48 sm:w-72 rounded  text-white placeholder:text-white h-10 bg-red-500"
            onChange={(e) =>
              handleChange(index, "buttonText", e.target.value)
            }
          />

          <button
            className="p-2 px-4 m-1 bg-black whitespace-nowrap text-white font-bold text-lg rounded hover:bg-gray-200  hover:text-black transition-all"
            onClick={() => toggleBlur(index)}
          >
            {slide.isBlur ? "Blur closed" : "Blur Open"}{" "}
            {/* Blur durumuna göre buton metni */}
          </button>
          <button
            className="flex items-center justify-center bg-red-500 text-white rounded-full p-2 focus:outline-none hover:bg-red-600 transition-all duration-300"
            onClick={() => removeSlide(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
