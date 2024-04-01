import './App.css';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import AdDisplay from './components/AdDisplay';
import AboutUs from './components/AboutUs';
import ConsultUs from './components/ConsultUs';
import Services from './components/Services';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import ProfileHomepage from './components/ProfileHomepage';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
          <Route index element={<HomePage/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signUp" element={<SignUp/>} />
          <Route path="ads" element={<AdDisplay/>} />
          <Route path="aboutUs" element={<AboutUs/>} />
          <Route path='profileHomepage' element={<ProfileHomepage/>} />
          <Route path="consultUS" element={<ConsultUs/>} />
          <Route path="services" element={ <Services/>} />
          <Route path="Footer" element={ <Footer/>} />
      </Routes>
    </BrowserRouter>
);
}

export default App;
