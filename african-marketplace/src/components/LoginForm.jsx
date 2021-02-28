import React from 'react';
import axios from 'axios';

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
    axios.post('https://african-marketplace-tt-webpt.herokuapp.com/users/login', this.state.credentials)
      .then(res => {
        console.log('LoginForm: res: ', res)
        // ????????
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/home');
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
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
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