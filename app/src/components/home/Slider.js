import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

export default function ProductSlider() {
  return (
    <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto mt-12">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/images/slide1.jpg" alt="Slide 1" className="w-full h-96 object-cover rounded-xl shadow-md" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/slide1.jpg" alt="Slide 2" className="w-full h-96 object-cover rounded-xl shadow-md" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/slide1.jpg" alt="Slide 3" className="w-full h-96 object-cover rounded-xl shadow-md" />
              </SwiperSlide>
            </Swiper>
        </div>
    </section>
  );
}