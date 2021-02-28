import { Link, Route, Switch } from 'react-router-dom'
import React from 'react'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import App from './App'

export default function Nav() {
    return (
        <div>
            <Link to='/login'>Log In</Link>
            <Link to='/signup'>Sign Up</Link>
            <Switch>
                <Route path='/login' component={LoginForm} />
                <Route path='/signup' component={SignupForm} />
                <Route exact path='/' component={App} />
            </Switch>
        </div>
    )
}
