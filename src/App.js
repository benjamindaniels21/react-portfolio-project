import { BrowserRouter } from 'react-router-dom';
import './App.css';
import  AppNavbar  from './components/Navigation';
import Footer from './components/Footer';
import Hero from './components/Hero';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavbar />
        <Hero />
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
