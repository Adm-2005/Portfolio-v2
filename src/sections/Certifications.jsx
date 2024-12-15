import { PiCertificateFill } from "react-icons/pi";
import { certifications } from "../constants/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Certifications({darkMode}) {
  return (
    <section
      id="certifications"
      className={`${darkMode ? 'bg-[#121212]' : 'bg-white'} px-4 lg:px-[5vw] w-full lg:w-[90vw] mx-auto`}
    >
      <div className="flex flex-1 flex-col w-full">
        <div className="mx-auto flex">
          <PiCertificateFill
            size="35px"
            color={darkMode ? "white" : "#6d28d9"}
            className=" mr-2 lg:mt-2"
          />
          <h1
            className={`text-3xl  lg:text-5xl ${darkMode ? 'text-white' : 'text-violet-700' } font-bold font-poppins`}
          >
            Certifications
          </h1>
        </div>

        <div className="w-full mx-auto py-7">
          <Swiper
            className="flex lg:hidden"
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {certifications.map((cert, index) => (
              <SwiperSlide key={index} className="flex flex-col w-[270px] md:w-[300px]">
                <img src={cert.img} className="w-full h-[220px] rounded-md border"></img>
                <h1 className="font-poppins font-bold text-xl text-violet-700">{cert.name}</h1>
                <h3 className="font-poppins font-medium text-lg text-violet-400">{cert.org}</h3>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* lg screens */}
          <Swiper
            className="hidden lg:flex"
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {certifications.map((cert, index) => (
              <SwiperSlide key={index} className="flex flex-col w-[300px]">
                <img src={cert.img} className="w-full h-[220px] rounded-md border"></img>
                <h1 className="font-poppins font-bold text-xl text-violet-700">{cert.name}</h1>
                <h3 className="font-poppins font-medium text-lg text-violet-400">{cert.org}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
