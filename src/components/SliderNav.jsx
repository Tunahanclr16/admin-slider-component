import { useSwiper } from "swiper/react";
import { FcPrevious, FcNext } from "react-icons/fc";
export default function SliderNav({ selectedImage }) {
  const swiper = useSwiper();

  const imageURL = selectedImage ? URL.createObjectURL(selectedImage) : null;

  return (
    <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
      <button
        className="text-5xl w-8 flex justify-center items-center h-8 bg-red-500 rounded-full cursor-pointer text-red-500 z-50 pointer-events-auto absolute top-1/2 left-4 transform -translate-y-1/2"
        onClick={() => swiper.slidePrev()}
      >
        {selectedImage ? (
          <img className="w-5" src={imageURL} alt="Previous" />
        ) : (
          <FcPrevious />
        )}
      </button>
      <button
        className="text-5xl w-8 flex justify-center items-center h-8 bg-red-500 rounded-full cursor-pointer text-red-500 z-50 pointer-events-auto absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={() => swiper.slideNext()}
      >
        {selectedImage ? (
          <img className="w-5" src={imageURL} alt="Next" />
        ) : (
          <FcNext />
        )}
      </button>
    </div>
  );
}