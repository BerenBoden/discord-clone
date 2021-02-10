import React from 'react'
import { auth, provider } from '../../firebase'
import { Button } from '@material-ui/core'
import '../../styles/Login.css'

const Login = () => {
    //Handles GoogleLogin
    const signInHandler = e => {
        auth.signInWithPopup(provider).catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://i.redd.it/0utml758tfrx.png" alt="logo"/>
            </div>

            <Button onClick={signInHandler}>Sign In</Button>
        </div>
    )
}

export default Login
