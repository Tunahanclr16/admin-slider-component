import { useSwiper } from "swiper/react";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

export default function SliderNav() {
  const swiper = useSwiper();

  return (
    <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
      <button
        className="text-5xl w-8 flex justify-center items-center h-8 bg-red-500 rounded-full cursor-pointer text-red-500 z-50 pointer-events-auto absolute top-1/2 left-4 transform -translate-y-1/2"
        onClick={() => swiper.slidePrev()}
      >
        <FcPrevious size={20} />
      </button>
      <button
        className="text-5xl w-8 flex justify-center items-center h-8 bg-red-500 rounded-full cursor-pointer text-red-500 z-50 pointer-events-auto absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={() => swiper.slideNext()}
      >
        <FcNext size={20} />
      </button>
    </div>
  );
}
