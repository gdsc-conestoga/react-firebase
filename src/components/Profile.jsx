import React from 'react'
import AuthService from '../services/authService';

export default function Profile(props) {
    const getLoggedInState = () => (
        <div>
            Logged in as {props.user.userName}
            <br />
            <button onClick={AuthService.LogOut}>Log Out</button>
        </div>
    )

    const getLoggedOutState = () => (
        <button onClick={AuthService.LogInWithGoogle}>Log In with Google</button>
    )

    return (
        <div>
            { props.user ? getLoggedInState() : getLoggedOutState() }
        </div>
    )
}
