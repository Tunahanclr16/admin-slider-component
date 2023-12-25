import React from "react";

export default function SliderForm({
  slides,
  handleChange,
  toggleBlur,
  removeSlide,
}) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 mx-auto gap-4">
      {slides.map((slide, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <h3 className="font-bold sm:text-xl mt-5">Slider {index + 1}</h3>
          <label htmlFor={`backgroundImage${index}`}>Background Image</label>
          <input
            type="text"
            id={`backgroundImage${index}`}
            placeholder="Background Image"
            value={slide.backgroundImage}
            className="w-full rounded text-white placeholder:text-white h-10 bg-red-500"
            onChange={(e) =>
              handleChange(index, "backgroundImage", e.target.value)
            }
          />

          <label htmlFor={`mainImage${index}`}>Main Image</label>
          <input
            type="text"
            id={`mainImage${index}`}
            placeholder="Main Image"
            value={slide.mainImage}
            className="w-full rounded text-white placeholder:text-white h-10 bg-red-500"
            onChange={(e) =>
              handleChange(index, "mainImage", e.target.value)
            }
          />

          <label htmlFor={`mainText${index}`}>Main Text</label>
          <input
            type="text"
            id={`mainText${index}`}
            placeholder="Main text"
            value={slide.mainText}
            className="w-full rounded text-white placeholder:text-white h-10 bg-red-500"
            onChange={(e) =>
              handleChange(index, "mainText", e.target.value)
            }
          />

          <label htmlFor={`subText${index}`}>Sub Text</label>
          <input
            type="text"
            id={`subText${index}`}
            placeholder="Sub text"
            value={slide.subText}
            className="w-full rounded text-white placeholder:text-white h-10 bg-red-500"
            onChange={(e) =>
              handleChange(index, "subText", e.target.value)
            }
          />

          <label htmlFor={`buttonText${index}`}>Button Text</label>
          <input
            type="text"
            id={`buttonText${index}`}
            placeholder="Button text"
            value={slide.buttonText}
            className="w-full rounded text-white placeholder:text-white h-10 bg-red-500"
            onChange={(e) =>
              handleChange(index, "buttonText", e.target.value)
            }
          />

          <div className="flex items-center mt-6">
            <button
              className="p-2 px-4 m-1 bg-black whitespace-nowrap text-white font-bold text-lg rounded hover:bg-gray-200 hover:text-black transition-all"
              onClick={() => toggleBlur(index)}
            >
              {slide.isBlur ? "Blur closed" : "Blur Open"}
            </button>
            <button
              className="flex items-center justify-center bg-red-500 text-white rounded-full p-2 focus:outline-none hover:bg-red-600 transition-all duration-300"
              onClick={() => removeSlide(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
