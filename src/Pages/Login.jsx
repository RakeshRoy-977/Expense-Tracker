import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged} from "firebase/auth";

import app from "../Firebase"
import "./Login.css"

const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const Login = () => {

    const navigate = useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/ExpenseTracker");
            } else {
             
            }
          });
    },[])

    function HandelLogin(){
        signInWithPopup(auth, provider)
    }
    return (
        <>

            <div className='loginPage'>
                <div className='HeroSection'>
                    <h1>Expense Tracker</h1>
                </div>
                    <button onClick={HandelLogin} type="button" className="login-with-google-btn" >
                        Sign in with Google
                    </button>
            </div>

        </>
    )
}

export default Login