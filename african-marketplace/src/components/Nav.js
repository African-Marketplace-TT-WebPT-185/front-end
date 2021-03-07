import React from 'react'
// import { useHistory } from 'react-dom'
import { Link } from 'react-router-dom'

function Nav(props) {

//     let history = useHistory()

    const onClick = () => {
        localStorage.removeItem('token')
      Document.location= '/login'
    }

    
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>Log In</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link onClick={onClick} to='/login'>Sign Out</Link>
        </div>
    )
}

export default Nav