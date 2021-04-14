import React from 'react'
import image from '../../../images/youtube.png';
import "./loginScreen.scss";

const LoginScreen = () => {
    return (
        <div className="login">
            <div className="login__container">
                <img src={image} alt=""/>
                <button>Login with Google</button>
                <p>This project is made with Youtube API</p>
            </div>
            
        </div>
    )
}

export default LoginScreen
