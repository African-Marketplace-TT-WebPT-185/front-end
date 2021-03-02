import React from 'react';
import axios from 'axios';

const initialState = {
  credentials: {
    username: '',
    password: ''
  }
};

class Login extends React.Component {
  state = initialState

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    // axios.post('https://african-marketplace-tt-webpt.herokuapp.com/users/register', this.state.credentials)
    axios.post('http://localhost:5000/users/register', this.state.credentials)

      .then(res => {
        console.log('SignupForm: res: ', res)
        // ????????
        localStorage.setItem('token', res.data.payload);
        // this.props.history.push('/home');
      })
      .catch(err => console.error('cannot signup to server: ', err.message));
      this.setState(initialState)
  };

  render() {
    return (
      <div>
        <h1>Sign-Up Form</h1>
        <form onSubmit={this.signup}>
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
          <select
            type='text'
            name='role'
            value={this.state.credentials.role}
            onChange={this.handleChange}
          >
            <option value="">---Select---</option>
            <option value="owner">Owner</option>
            <option value="user">User</option>
          </select>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Login;