import ProductDisplay from './ProductDisplay';
import InquirySection from './InquirySection';
import PartnersSection from './PartnersSection';
import VideoSlider from './VideosSection';

export default function Home() {
  return (
    <>
        <section className="bg-brand-surface py-16">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-6xl font-semibold mb-4">A Fire Safety Leader</h1>
            <p className="text-xl text-brand-textMuted">
              Here are the products of <span className="font-medium">Saving Story</span>, 
              a company specializing in fire evacuation supplies.
            </p>
          </div>
          <ProductDisplay orientation="left" id="MASK" />
        </section>
        <InquirySection />
        <VideoSlider />
        <PartnersSection />
    </>
  );
}