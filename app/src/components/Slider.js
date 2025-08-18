import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

export default function ProductSlider() {
  return (
    <section class="py-10 bg-gray-50">
        <div class="max-w-6xl mx-auto">
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                    <img src="/images/slide1.jpg" alt="Slide 1" class="w-full h-96 object-cover rounded-xl shadow-md" />
                    </div>
                    <div class="swiper-slide">
                    <img src="/images/slide2.jpg" alt="Slide 2" class="w-full h-96 object-cover rounded-xl shadow-md" />
                    </div>
                    <div class="swiper-slide">
                    <img src="/images/slide3.jpg" alt="Slide 3" class="w-full h-96 object-cover rounded-xl shadow-md" />
                    </div>
                </div>

                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>

                <div class="custom-pagination absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 text-gray-300 font-bold"></div>
            </div>
        </div>
    </section>
  );
}