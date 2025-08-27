import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

export default function ProductSlider() {
  return (
    <section class="py-10 bg-gray-50">
        <div class="max-w-6xl mx-auto">
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
                <img src="/images/slide1.jpg" alt="Slide 1" class="w-full h-96 object-cover rounded-xl shadow-md" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/slide1.jpg" alt="Slide 2" class="w-full h-96 object-cover rounded-xl shadow-md" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/slide1.jpg" alt="Slide 3" class="w-full h-96 object-cover rounded-xl shadow-md" />
              </SwiperSlide>
            </Swiper>
        </div>
    </section>
  );
}