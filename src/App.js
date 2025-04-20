import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <NavBar />
        <HeroSection />
        <Footer />
    </div>
  );
}

export default App;
