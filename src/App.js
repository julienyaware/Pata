import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useContext, useState } from "react";
import { db, auth } from './Firabase';
import {signOut,} from "firebase/auth";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import Login from './components/Login';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import AdDisplay from './components/AdDisplay';
import AboutUs from './components/AboutUs';
import ConsultUs from './components/ConsultUs';
import Services from './components/Services';
import Footer from './components/Footer';
import Categories from './components/Categories'
import Category from './components/Category'
import SignUp from './components/SignUp';
import ProfileHomepage from './components/ProfileHomepage';
import ProfileImageUpload from './components/ProfileImageUpload';
import ProfileComments from './components/ProfileComments';
import { AuthContext } from './context/AuthContext';
import Providers from './components/Providers';



function App() {
  const [userAuth, setUserAuth] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

   const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login" />
    
  }
  console.log(currentUser.uid)

  const handleCreate = async (event, formState) => {
    event.preventDefault();
    try {
      await setDoc(doc(db, "profile", currentUser.uid), {
        firstName: formState["firstName"],
        lastName: formState["lastName"],
        gender: formState["gender"],
        state: formState["state"],
        education: formState["education"],
        yearsOfExperience: formState["yearsOfExperience"],
        hourlyRate: formState["hourlyRate"],
        availability: formState["availability"],
        phoneNumber: formState["phoneNumber"],
        occupation: formState["occupation"],
        workDescription: formState["workDescription"],
        user_id: currentUser.uid,
      });
      window.alert("Document Created");
    } catch (error) {
      window.alert(error.message);
    }
  };

  const documentProps = [handleCreate];

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
          <Route path='login/profilehomepage' element={<RequireAuth><ProfileHomepage crudOps={documentProps}/></RequireAuth>} />
          <Route path="consultUS" element={<ConsultUs/>} />
          <Route path="services" element={ <Services/>} />
          <Route path="Footer" element={ <Footer/>} />
          <Route path="profileimageupload" element={ <RequireAuth><ProfileImageUpload/></RequireAuth>} />
          <Route path="profilecomments" element={ <RequireAuth><ProfileComments/></RequireAuth>} />
          <Route path="categories" element={ <Categories/>} />
          <Route path="providers" element={ <Providers/>} />
          <Route path="category" element={ <Category/>} />
      </Routes>
    </BrowserRouter>
);
}

export default App;
