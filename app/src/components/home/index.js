import ProductDisplay from './ProductDisplay';
import InquirySection from './InquirySection';
import PartnersSection from './PartnersSection';
import VideoSlider from './VideosSection';
import Slider from './Slider';

export default function Home() {
  return (
    <>
        <Slider value={50} onChange={(value) => console.log(value)} />
        <section className="bg-white py-16">
        <ProductDisplay orientation="left" id="01" />
        <ProductDisplay orientation="right" id="02" />
        <ProductDisplay orientation="left" id="03" />
        </section>
        <InquirySection />
        <VideoSlider />
        <PartnersSection />
    </>
  );
}