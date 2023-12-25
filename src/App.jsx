import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderNav from "./components/SliderNav";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import SliderForm from "./components/SliderForm";

function Slider() {
  // Varsayılan slayt veri yapısı
  const defaultSlideData = {
    backgroundImage:
      "https://fotolifeakademi.com/uploads/2020/04/manzara-fotografi-cekmek.jpg",
    mainImage:
      "https://fotolifeakademi.com/uploads/2020/04/manzara-fotografi-cekmek.jpg",
    mainText: "Default Main Text",
    subText: "Default Sub Text",
    buttonText: "Default Button Text",
    isBlur: false,
  };

  // Slaytlar ve mevcut slaytın indeksini tutan state'ler
  const [slides, setSlides] = useState([defaultSlideData]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [delay, setDelay] = useState(4700); // Varsayılan gecikme süresi

  // useEffect kullanarak yerel depodan kaydedilmiş slaytları yükleme işlemi
  useEffect(() => {
    const savedSlides = JSON.parse(localStorage.getItem("slides"));
    if (savedSlides) {
      setSlides(savedSlides);
    }
    const savedDelay = localStorage.getItem("delay");
    if (savedDelay) {
      setDelay(parseInt(savedDelay, 10));
    }
  }, []);

  // Slaytta bulanıklık (blur) durumunu değiştiren fonksiyon
  const toggleBlur = (index) => {
    const updatedSlides = [...slides];
    updatedSlides[index].isBlur = !updatedSlides[index].isBlur; // Blur durumunu tersine çevir
    setSlides(updatedSlides);
    saveToLocalStorage(updatedSlides);
  };

  // Slayt verilerinde yapılan değişiklikleri takip eden fonksiyon
  const handleChange = (index, field, value) => {
    const updatedSlides = [...slides];
    updatedSlides[index][field] = value; // Belirtilen alandaki değeri güncelle
    setSlides(updatedSlides);
    saveToLocalStorage(updatedSlides);
  };

  // Değişiklikleri yerel depoya kaydeden fonksiyon
  const handleSave = () => {
    localStorage.setItem("slides", JSON.stringify(slides));
  };

  // Yeni bir slayt eklemeye yarayan fonksiyon
 const addNewSlide = () => {
  const newSlide = {
    backgroundImage:
      "https://fotolifeakademi.com/uploads/2020/04/manzara-fotografi-cekmek.jpg",
    mainImage: "https://fotolifeakademi.com/uploads/2020/04/manzara-fotografi-cekmek.jpg",
    mainText: "Default Main Text",
    subText: "Default Sub Text",
    buttonText: "Default Button Text",
  };
  setSlides([...slides, newSlide]);
  saveToLocalStorage([...slides, newSlide]);
};
  // Belirtilen indeksteki slaydı kaldıran fonksiyon
  const removeSlide = (index) => {
    const updatedSlides = slides.filter((_, idx) => idx !== index);
    setSlides(updatedSlides);
    setCurrentSlideIndex(0);
    saveToLocalStorage(updatedSlides);
  };

  // Slayt verilerini yerel depoya kaydetme işlevi
  const saveToLocalStorage = (data) => {
    localStorage.setItem("slides", JSON.stringify(data));
  };

  const handleDelayChange = (e) => {
    const newDelay = parseInt(e.target.value, 10);
    setDelay(newDelay);
    saveDelayToLocalStorage(newDelay); // Değişiklik yapıldıktan sonra delay'i kaydet
  };
  const saveDelayToLocalStorage = (delay) => {
    localStorage.setItem("delay", delay.toString());
  };
  useEffect(() => {
    const savedSlides = JSON.parse(localStorage.getItem("slides"));
    if (savedSlides && savedSlides.length > 0) {
      setSlides(savedSlides);
    } else {
      // İlk açılışta varsayılan 2 slaytı ekle
      setSlides([defaultSlideData, defaultSlideData]);
      saveToLocalStorage([defaultSlideData, defaultSlideData]);
    }
  }, []);
  return (
    <div className="overflow-hidden">
      <h1 className="text-center text-4xl font-bold">Edit</h1>
      <SliderForm
  slides={slides} // Doğru props'u geçirdiğinizden emin olun
  handleChange={handleChange}
  toggleBlur={toggleBlur}
  removeSlide={removeSlide}
/>      
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
                  />
                </div>

                <div className="hidden w-[500px] sm:flex gap-2 flex-col items-center">
                  <h2 className="text-center text-white text-sm md:text-2xl lg:text-4xl font-semibold">
                    {slide.mainText}
                  </h2>
                  <p className="text-center text-white text-xs sm:text-base md:text-xl">
                    {slide.subText}
                  </p>
                  <button className="p-2 bg-white rounded-xl font-bold m-2 hover:rotate-6 transition-all md:text-md lg:text-lg xl:text-xl 4xl:text-2xl">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
              <SliderNav />
            </div>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>

    </div>
  );
}

export default Slider;
