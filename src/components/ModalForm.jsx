import React, { useState } from "react";

import SliderNav from "./SliderNav";
export default function ModalForm({
    slide,
    handleChange,
    toggleBlur,
    closeModal,
    index,
  }) {
  return (
    <>
      <div className="bg-white p-8 w-full   h-full rounded">
        
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
          onChange={(e) => handleChange(index, "mainImage", e.target.value)}
        />
        <label htmlFor={`mainText${index}`}>Main Text</label>
        <input
          type="text"
          id={`mainText${index}`}
          placeholder="Main text"
          value={slide.mainText}
          className="w-full rounded text-white placeholder:text-white h-10 bg-red-500"
          onChange={(e) => handleChange(index, "mainText", e.target.value)}
        />

        <label htmlFor={`subText${index}`}>Sub Text</label>
        <input
          type="text"
          id={`subText${index}`}
          placeholder="Sub text"
          value={slide.subText}
          className="w-full rounded text-white placeholder:text-white h-10 bg-red-500"
          onChange={(e) => handleChange(index, "subText", e.target.value)}
        />

        <label htmlFor={`buttonText${index}`}>Button Text</label>
        <input
          type="text"
          id={`buttonText${index}`}
          placeholder="Button text"
          value={slide.buttonText}
          className="w-full rounded text-white placeholder:gtext-white h-10 bg-red-500"
          onChange={(e) => handleChange(index, "buttonText", e.target.value)}
        />
                <label htmlFor={`mainTextSize${index}`}>Main Text Size</label>
        <input
          type="number"
          id={`mainTextSize${index}`}
          value={slide.mainTextSize}
          onChange={(e) =>
            handleChange(index, "mainTextSize", parseInt(e.target.value))
          }
          className="w-full rounded text-white placeholder:text-white h-10 bg-red-500"
        />
        <label htmlFor={`mainTextSize${index}`}>Sub Text Size</label>
        <input
          type="number"
          id={`subTextSize${index}`}
          value={slide.subTextSize}
          onChange={(e) =>
            handleChange(index, "subTextSize", parseInt(e.target.value))
          }
          className="w-full rounded text-white placeholder:text-white h-10 bg-red-500"
        />
        <label htmlFor={`mainTextSize${index}`}>Button Text Size</label>
        <input
          type="number"
          id={`buttonTextSize${index}`}
          value={slide.buttonTextSize}
          onChange={(e) =>
            handleChange(index, "buttonTextSize", parseInt(e.target.value))
          }
          className="w-full rounded text-white placeholder:text-white h-10 bg-red-500"
        />
        <label htmlFor="">Main Image Width</label>
               <input
          type="number"
          id={`mainImageWidth${index}`}
          value={slide.mainImageWidth}
          onChange={(e) =>
            handleChange(index, "mainImageWidth", parseInt(e.target.value))
          }
          className="w-full rounded text-white placeholder:text-white h-10 bg-red-500"
        />
                <input
          type="number"
          id={`mainImageHeight${index}`}
          value={slide.mainImageHeight}
          onChange={(e) =>
            handleChange(index, "mainImageHeight", parseInt(e.target.value))
          }
          className="w-full rounded text-white placeholder:text-white h-10 bg-red-500"
        />
        <div className="flex items-center gap-2">
          <button
            className="px-6 bg-green-500 w-32  rounded hover:bg-black hover:text-green-500 transition-all p-2"
            onClick={() => toggleBlur(index)}
          >
            {slide.isBlur ? "Blur closed" : "Blur Open"}
          </button>
          <div className="flex flex-col items-center ">
            
            <label htmlFor="">Main Text Color</label>
            <input
              type="color"
              className="rounded-full w-7 h-7  "
              value={slide.mainTextColor} // Burada mainTextColor değerini kullanın
              onChange={(e) =>
                handleChange(index, "mainTextColor", e.target.value)
              } // mainTextColor'u değiştirmek için handleChange'i kullanın
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Sub Text Color</label>
            <input
              type="color"
              value={slide.subTextColor} // Burada mainTextColor değerini kullanın
              onChange={(e) =>
                handleChange(index, "subTextColor", e.target.value)
              } // mainTextColor'u değiştirmek için handleChange'i kullanın
              className="rounded-full w-7 h-7"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Button Text Color</label>
            <input
              type="color"
              value={slide.buttonTextColor} // Burada mainTextColor değerini kullanın
              onChange={(e) =>
                handleChange(index, "buttonTextColor", e.target.value)
              } // mainTextColor'u değiştirmek için handleChange'i kullanın
              className="rounded-full w-7 h-7"
            />
          </div>
        </div>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
      <div className="w-[1700px]">
        <div className="sm:h-[500px]  mt-4 h-[200px] relative overflow-hidden">
          <img
            className={`w-full h-full ${slide.isBlur ? "blur" : ""}`}
            style={{ backgroundColor: slide.backgroundColor }}
            src={slide.backgroundImage}
            alt=""
          />
          <div className="flex mx-auto max-w-[1400px] justify-between items-center absolute inset-0 sm:px-4">
            <div>
              <img
                className="sm:w-[400px] w-screen  mb-4 sm:mb-0 h-[250px] z-50 rounded object-cover"
                src={slide.mainImage}
                alt=""
                style={{ width: slide.mainImageWidth,slide:slide.mainImageHeight}}
              />
            </div>

            <div className="hidden w-[500px] sm:flex gap-2 flex-col items-center">
            <h2
                className="text-center text-white text-sm md:text-2xl lg:text-4xl font-semibold"
                style={{
                  color: slide.mainTextColor,
                  fontSize: `${slide.mainTextSize}px`, // Metin boyutunu burada ayarlıyoruz
                }}
              >
                {slide.mainText}
              </h2>
              <p
                className="text-center text-white text-xs sm:text-base md:text-xl"
                style={{
                  color: slide.subTextColor,
                  fontSize: `${slide.subTextSize}px`, // Metin boyutunu burada ayarlıyoruz
                }}
              >
                {slide.subText}
              </p>
              <button
                className="p-2 bg-white rounded-xl font-bold m-2 hover:rotate-6 transition-all md:text-md lg:text-lg xl:text-xl 4xl:text-2xl"
                style={{
                    color: slide.buttonTextColor,
                    fontSize: `${slide.buttonTextSize}px`, // Metin boyutunu burada ayarlıyoruz
                  }}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
          <SliderNav />
        </div>
      </div>
    </>
  );
}
