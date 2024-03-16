import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import AdDisplay from './components/AdDisplay';
import AboutUs from './components/AboutUs';
import ConsultUs from './components/ConsultUs';
import Services from './components/Services';

function App() {
  return (
     <div>
      <NavBar/>
      <AdDisplay/>
      <AboutUs/>
      <ConsultUs/>
      <Services/>
     </div> 
);
}

export default App;
