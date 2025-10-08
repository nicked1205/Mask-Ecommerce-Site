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

function App() {
  return (
    <div className="App">
      <Header />

      <main className="flex-grow pt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company-overview" element={<CompanyOverview />} />
          <Route path="/ceo-message" element={<CEOGreeting />} />
          <Route path="/management-philosophy" element={<ManagementPhilosophy />} />
          <Route path="/history" element={<History />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/directions" element={<Directions />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
