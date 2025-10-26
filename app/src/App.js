import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
import CompanyOverview from './components/company/company-overview';
import CEOGreeting from './components/company/ceo-message';
import ManagementPhilosophy from './components/company/management-philosophy';
import History from './components/company/history';
import Recruitment from './components/company/recruitment';
import Directions from './components/company/directions';
import Videos from './components/pr/pv';
import Photos from './components/pr/photos';
import Partners from './components/pr/partners';
import Inquiry from './components/community/inquiry';
import ProductLifeSavingMask from './components/products/lifeSavingMask';
import PressReleases from './components/pr/press';
import Notice from './components/community/notice';
import Certificates from './components/company/certificate';

function App() {
  return (
    <div className="App">
      <Header />

      <main className="flex-grow pt-16 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company-overview" element={<CompanyOverview />} />
          <Route path="/ceo-message" element={<CEOGreeting />} />
          <Route path="/management-philosophy" element={<ManagementPhilosophy />} />
          <Route path="/history" element={<History />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/patents-and-certifications" element={<Certificates />} />
          <Route path="/pr/videos" element={<Videos />} />
          <Route path="/pr/images" element={<Photos />} />
          <Route path="/pr/partners" element={<Partners />} />
          <Route path="/pr/press-release" element={<PressReleases />} />
          <Route path="/community/inquiry" element={<Inquiry />} />
          <Route path="/community/notice" element={<Notice />} />
          <Route path="/products/mask" element={<ProductLifeSavingMask />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
