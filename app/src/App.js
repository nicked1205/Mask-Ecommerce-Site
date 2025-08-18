import './styles/App.css';
import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider value={50} onChange={(value) => console.log(value)} />
    </div>
  );
}

export default App;
