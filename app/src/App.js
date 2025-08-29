import './styles/App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import ProductDisplay from './components/ProductDisplay';
import InquirySection from './components/InquirySection';
import PartnersSection from './components/PartnersSection';

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
      <PartnersSection />
      <Footer />
    </div>
  );
}

export default App;
