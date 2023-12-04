import React from 'react'
import "./NavBar.css"
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const nav = useNavigate()

    function codeBtn() {
        window.open("https://github.com/RakeshRoy-977/Responsive-Nabbar")
    }

    function LinkedinBtn() {
        window.open("https://www.linkedin.com/in/rakeshroy977/")
    }
    function logoutBtn() {
        const auth = getAuth();
        signOut(auth).then(() => {
            nav("/")
        }).catch((error) => {
            console.log(error)
        });

    }

    return (
        <div className='NavBox'>
            <div className='rightSide'>
                <span className='titelText'>Expense Tracker</span>
                {/* <img src="" alt="" /> */}
            </div>
            <div className="leftSide">
                <button onClick={codeBtn} className='codeBtn'>Source Code</button>
                <button onClick={LinkedinBtn} className='LinkedinBtn'>Linkedin Profile</button>
                <button onClick={logoutBtn} className='LinkedinBtn'>Log Out</button>
            </div>
        </div>
    )
}

export default NavBar