import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderNav from "./components/SliderNav";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import SliderForm from "./components/SliderForm";
import BgPhoto from "../public/bgPhoto.jpg";

function Slider() {
  const defaultSlideData = {
    backgroundImage: BgPhoto,
    mainTextSize: 24,
    subTextSize: 16,
    buttonTextSize:12,
    mainImage: BgPhoto,
    mainImageWidth:400,
    mainText: "Default Main Text",
    subText: "Default Sub Text",
    buttonText: "Default Button Text",
    mainImageHeight:350,
    mainTextColor: "#fff", // Default bir metin rengi ekleyin veya istediğiniz bir renk koduyla başlatın
    subTextColor: "#fff", // Default bir metin rengi ekleyin veya istediğiniz bir renk koduyla başlatın
    buttonTextColor: "#000", // Default bir metin rengi ekleyin veya istediğiniz bir renk koduyla başlatın
    isBlur: false,
  };

  const [slides, setSlides] = useState([defaultSlideData]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [delay, setDelay] = useState(4700);

  
  useEffect(() => {
    const savedSlides = JSON.parse(localStorage.getItem("slides"));
    if (savedSlides) {
      setSlides(savedSlides);
    }
  }, []);

  useEffect(() => {
    const savedDelay = localStorage.getItem("delay");
    if (savedDelay) {
      setDelay(parseInt(savedDelay, 10));
    }
  }, []);

  const toggleBlur = (index) => {
    const updatedSlides = [...slides];
    updatedSlides[index].isBlur = !updatedSlides[index].isBlur;
    setSlides(updatedSlides);
    saveToLocalStorage(updatedSlides);
  };
  const handleChange = (index, field, value) => {
    const updatedSlides = [...slides];
    if (field === 'positions') {
      updatedSlides[index].positions = value;
    } else {
      updatedSlides[index][field] = value;
    }
    setSlides(updatedSlides);
    saveToLocalStorage(updatedSlides);
  };
  

  const handleSave = () => {
    localStorage.setItem("slides", JSON.stringify(slides));
  };

  const addNewSlide = () => {
    const newSlide = {
      backgroundImage: BgPhoto,
      mainImageWidth:400,
      mainImage: BgPhoto,
      mainText: "Default Main Text",
      mainTextSize: 32,
      subTextSize: 16,
      mainImageHeight:350,
      buttonTextSize:12,
      subText: "Default Sub Text",
      buttonText: "Default Button Text",
    };
    setSlides([...slides, newSlide]);
    saveToLocalStorage([...slides, newSlide]);
  };

  const removeSlide = (index) => {
    const updatedSlides = slides.filter((_, idx) => idx !== index);
    setSlides(updatedSlides);
    setCurrentSlideIndex(0);
    saveToLocalStorage(updatedSlides);
  };

  const saveToLocalStorage = (data) => {
    localStorage.setItem("slides", JSON.stringify(data));
  };

  const handleDelayChange = (e) => {
    const newDelay = parseInt(e.target.value, 10);
    setDelay(newDelay);
    saveDelayToLocalStorage(newDelay);
  };

  const saveDelayToLocalStorage = (delay) => {
    localStorage.setItem("delay", delay.toString());
  };

  useEffect(() => {
    const savedSlides = JSON.parse(localStorage.getItem("slides"));
    if (savedSlides && savedSlides.length > 0) {
      setSlides(savedSlides);
    } else {
      setSlides([defaultSlideData, defaultSlideData]);
      saveToLocalStorage([defaultSlideData, defaultSlideData]);
    }
  }, []);
  return (
    <div className="overflow-hidden">
      <h1 className="text-center text-4xl mt-2 font-bold">Edit</h1>
      <div className="p-2">
        <SliderForm
          slides={slides}
          handleChange={handleChange}
          toggleBlur={toggleBlur}
          removeSlide={removeSlide}
        />
      </div>
      <div className="mt-4">
        <label htmlFor="delayInput" className="block font-bold">
          Delay (ms):
        </label>
        <input
          type="number"
          id="delayInput"
          value={delay}
          onChange={handleDelayChange}
          className="border border-gray-300 rounded px-2 py-1 mt-1"
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handleSave}
          className="cursor-pointer px-12 mt-2 hover:bg-gray-300 text-white font-bold transition-all hover:text-red-500 bg-red-500 rounded p-2 z-10"
        >
          Save
        </button>
        <button
          onClick={addNewSlide}
          className="cursor-pointe px-12 mt-2 hover:bg-gray-300 text-white font-bold transition-all hover:text-red-500 bg-red-500 rounded p-2  z-10"
        >
          Add Slider{" "}
        </button>
      </div>

      <Swiper
        spaceBetween={50}
        rewind={true}
        slidesPerView={1}
        pagination={true}
        modules={[Pagination, Autoplay]}
        initialSlide={currentSlideIndex}
        autoplay={{
          delay: delay,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
        navigation={false}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <SwiperSlide>
              <div className="sm:h-[400px]  mt-4 h-[200px] relative overflow-hidden">
                <img
                  className={`w-full h-full ${slide.isBlur ? "blur" : ""}`}
                  style={{ backgroundColor: slide.backgroundColor }}
                  src={slide.backgroundImage}
                  alt=""
                />
                <div className="flex mx-auto max-w-[1400px] justify-between items-center absolute inset-0 sm:px-4">
                  <div>
                    <img
                      className="sm:w-[600px] w-screen  mb-4 sm:mb-0 h-[350px] z-50 rounded object-cover"
                      src={slide.mainImage}
                      alt=""
                      style={{width:slide.mainImageWidth,height:slide.mainImageHeight}}
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
                      style={{ color: slide.subTextColor }}
                    >
                      {slide.subText}
                    </p>
                    <button
                      className="p-2 bg-white rounded-xl font-bold m-2 hover:rotate-6 transition-all md:text-md lg:text-lg xl:text-xl 4xl:text-2xl"
                      style={{ color: slide.buttonTextColor,fontSize:`${slide.buttonTextSize}px` }}
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
                        <SliderNav/>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
