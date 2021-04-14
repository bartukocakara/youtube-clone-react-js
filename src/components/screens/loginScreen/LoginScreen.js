import React, { useEffect } from 'react'
import image from '../../../images/youtube.png';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../../redux/actions/auth.action';

import "./loginScreen.scss";

const LoginScreen = () => {

    const dispatch = useDispatch()

    const accessToken = useSelector(state => state.auth.accessToken)

    const handleLogin = () => {

        dispatch(login())
    }

    const history = useHistory()

    useEffect( () =>{

        if(accessToken) {

            history.push('/')

        }

    }, [accessToken, history] )

    return (
        <div className="login">
            <div className="login__container">
                <img src={image} alt=""/>
                <button onClick={handleLogin}>Login with Google</button>
                <p>This project is made with Youtube API</p>
            </div>
            
        </div>
    )
}

export default LoginScreen
