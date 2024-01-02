import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img1 from "../../assets/trend1.jpg";
import img2 from "../../assets/tend2.jpg";
import img3 from "../../assets/trend3.jpg";
import img4 from "../../assets/trend4.jpg";
import img5 from "../../assets/trend5.jpg";
import img6 from "../../assets/trend6.jpg";
import img7 from "../../assets/trend7.jpg";
import img8 from "../../assets/trend8.jpg";
import img9 from "../../assets/trend9.jpg";
import img10 from "../../assets/trend10.jpg";

const TrendingTopics = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <div>
        <h1 className="text-4xl font-bold leading-tight">
          Top Trending Topics
        </h1>
        <p className="text-xl text-secondary leading-snug">
          Discover over 112 topics
        </p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          <div className="w-64 h-52 relative overflow-hidden rounded-md shadow-lg mx-auto">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="bg-black/25 cursor-pointer text-white py-2 px-4 text-lg font-semibold rounded-full">
                Garden (10)
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-64 h-52 relative overflow-hidden rounded-md shadow-lg mx-auto">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${img2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="bg-black/25 text-white py-2 px-4 text-lg font-semibold rounded-full">
                Electronics (12)
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-64 h-52 relative overflow-hidden rounded-md shadow-lg mx-auto">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${img3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="bg-black/25 text-white py-2 px-4 text-lg font-semibold rounded-full">
                Health (8)
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-64 h-52 relative overflow-hidden rounded-md shadow-lg mx-auto">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${img4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="bg-black/25 text-white py-2 px-4 text-lg font-semibold rounded-full">
                Outdoors (5)
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-64 h-52 relative overflow-hidden rounded-md shadow-lg mx-auto">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${img5})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="bg-black/25 text-white py-2 px-4 text-lg font-semibold rounded-full">
                Toys (9)
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-64 h-52 relative overflow-hidden rounded-md shadow-lg mx-auto">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${img6})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="bg-black/25 text-white py-2 px-4 text-lg font-semibold rounded-full">
                Automotive (11)
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-64 h-52 relative overflow-hidden rounded-md shadow-lg mx-auto">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${img7})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="bg-black/25 text-white py-2 px-4 text-lg font-semibold rounded-full">
                Tools (10)
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-64 h-52 relative overflow-hidden rounded-md shadow-lg mx-auto">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${img8})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="bg-black/25 text-white py-2 px-4 text-lg font-semibold rounded-full">
                Industrial (15)
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-64 h-52 relative overflow-hidden rounded-md shadow-lg mx-auto">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${img9})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="bg-black/25 text-white py-2 px-4 text-lg font-semibold rounded-full">
                Jewelry (14)
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-64 h-52 relative overflow-hidden rounded-md shadow-lg mx-auto">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${img10})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <p className="bg-black/25 text-white py-2 px-4 text-lg font-semibold rounded-full">
                Basic Knowledge (10)
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TrendingTopics;
