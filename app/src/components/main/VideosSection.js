import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function VideoSlider() {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);

  const videos = [
    { url: "https://www.youtube.com/embed/VIDEO_ID1", title: "Life-saving towel demonstration image" },
    { url: "https://www.youtube.com/embed/VIDEO_ID2", title: "Life-saving mask demonstration image" },
    { url: "https://www.youtube.com/embed/VIDEO_ID3", title: "Empirical images of oxygen generators" },
    { url: "https://www.youtube.com/embed/VIDEO_ID4", title: "Another Product Demo" },
  ];

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || !paginationRef.current) return;

    swiper.params.pagination.el = paginationRef.current;
    swiper.pagination.init();
    swiper.pagination.render();
    swiper.pagination.update();
  }, []);

  return (
    <section className="py-10 bg-gradient-to-b from-white to-gray-100 px-6">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-red-800">Promotional Video</h2>
        <p className="text-gray-600">Check out the video on the products of Saving Story.</p>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)}
        pagination={{ 
            clickable: true,
            renderBullet: (_index, className) =>
            `<span class="${className} custom-bullet"></span>`,
            el: null }} 
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {videos.map((video, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col items-center">
              <iframe
                className="rounded-2xl shadow-lg w-full aspect-video"
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <p className="mt-3 text-gray-800 font-medium text-center">{video.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex flex-col items-center mt-6">
        <div ref={paginationRef} className="custom-pagination flex items-center justify-center gap-3 mb-4" />

        <a
          href="/videos"
          className="px-6 py-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition flex items-center gap-2"
        >
          VIEW MORE <span className="font-bold text-red-700">＋</span>
        </a>
      </div>
    </section>
  );
}
