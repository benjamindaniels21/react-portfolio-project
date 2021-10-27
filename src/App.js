import { BrowserRouter } from 'react-router-dom';
import './App.css';
import  AppNavbar  from './components/Navigation';
import Hero from './components/Hero';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavbar />
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
