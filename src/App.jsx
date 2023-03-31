import { Header } from './components/Header/Header';
import './App.scss';
import { Hero } from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className="overlay"></div>
    </div>
  );
}

export default App;
