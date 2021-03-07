import React from 'react';
import axiosWithCors from './../utils/axiosWithCors';
 // eslint-disable-next-line
import SellerHome from './SellerHome'
 // eslint-disable-next-line
import BuyerHome from './BuyerHome'

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithCors().post('/auth/login', this.state.credentials)

      .then(res => {
        console.log('LoginForm: res: ', res)
        // ????????
        localStorage.setItem('token', res.data.token);
        this.props.history.push('/buyer');
      })
      .catch(err => console.error('cannot login to server: ', err.message));
  };

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <form onSubmit={this.login}>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default Login;