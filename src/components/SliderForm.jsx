import React, { useState } from "react";
import ModalForm from "./ModalForm";

export default function SliderForm({
  slides,
  handleChange,
  toggleBlur,
  handleNewButton,
  setShowNewButton,
  setSelectedImage,
  selectedImage,
  handleImageChange,
  removeSlide,
}) {
  const [showModal, setShowModal] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(null);

  const openModal = (index) => {
    setCurrentSlideIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mx-auto gap-4">
      {slides.map((slide, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center">
            <h3 className="font-bold sm:text-xl mt-5">Slider {index + 1}</h3>
            <div className="flex sm:flex-row flex-col items-center gap-2">
              <button
                className="px-8 bg-blue-500 rounded hover:bg-black hover:text-blue-500 transition-all p-2"
                onClick={() => openModal(index)}
              >
                Edit
              </button>
              <button
                className="px-8 bg-red-500 rounded hover:bg-black hover:text-red-500 transition-all p-2"
                onClick={() => removeSlide(index)}
              >
                Delete
              </button>
            </div>
          </div>
          {showModal && (
            <div className="bg-gray-400 absolute top-0 w-full h-full left-0 overflow-hidden"></div>
          )}
          {showModal && currentSlideIndex === index && (
            <div className="fixed top-0 left-0 z-50 w-screen mx-auto sm:flex-row flex-col h-screen bg-black bg-opacity-50 flex items-center justify-center">
              <ModalForm
                slide={slide}
                handleChange={handleChange}
                toggleBlur={toggleBlur}
                handleNewButton={handleNewButton}
                setShowNewButton={setShowNewButton}
                index={index}
                closeModal={closeModal}
                setSelectedImage={setSelectedImage}
                handleImageChange={handleImageChange}
                selectedImage={selectedImage}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
