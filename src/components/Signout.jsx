import React from 'react';
import {auth} from '../Firabase'
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


const Signout = () => {

    
        const navigate = useNavigate();
        const user = auth.currentUser;
    
        const logoutUser = async (e) => {
            e.preventDefault();
    
            await signOut(auth);
            navigate("/");
        }
    

    return (
        <div className = "text-white min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <p>Welcome <em className = "text-decoration-underline">{ user.email }</em>. You are logged in!</p>
                    <div className = "d-grid gap-2">
                    <button type = "submit" className = "btn btn-primary pt-3 pb-3" onClick = {(e) => logoutUser(e)}>Logout</button>
            </div>
        </div>       
    );
};

export default Signout;