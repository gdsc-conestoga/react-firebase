import React from 'react'
import AuthService from '../services/authService'
import './Profile.css'

export default function Profile(props) {
    const getLoggedInState = () => (
        <div>
            {props.user.userName}
            <br/>
            <button onClick={AuthService.LogOut}>Log Out</button>
        </div>
    )

    const getLoggedOutState = () => (
        <button onClick={AuthService.LogInWithGoogle}>Log In</button>
    )

    return (
        <div className="Profile">
            { props.user ? getLoggedInState() : getLoggedOutState() }
        </div>
    )
}
