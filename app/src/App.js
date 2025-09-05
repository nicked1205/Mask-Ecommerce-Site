import './styles/App.css';
import Header from './components/Header';
import Slider from './components/main/Slider';
import Footer from './components/Footer';
import ProductDisplay from './components/main/ProductDisplay';
import InquirySection from './components/main/InquirySection';
import PartnersSection from './components/main/PartnersSection';
import VideoSlider from './components/main/VideosSection';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider value={50} onChange={(value) => console.log(value)} />
      <section className="bg-white py-16">
        <ProductDisplay orientation="left" id="01" />
        <ProductDisplay orientation="right" id="02" />
        <ProductDisplay orientation="left" id="03" />
      </section>
      <InquirySection />
      <VideoSlider />
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default App;
