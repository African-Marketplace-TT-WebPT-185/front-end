import React from 'react';
import axiosWithCors from './../utils/axiosWithCors';

const initialState = {
  credentials: {
    username: '',
    password: '',
    department:''
  }
};

class Signup extends React.Component {
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
    axiosWithCors().post('/auth/register', this.state.credentials)

      .then(res => {
        console.log('SignupForm: res: ', res)
        
        // localStorage.setItem('token', res.data.token);
        this.props.history.push('/login');
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
            name='department'
            value={this.state.credentials.department}
            onChange={this.handleChange}
          >
            <option value="">---Department---</option>
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
          </select>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Signup;