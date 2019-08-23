
//Login.js
import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import BubblePage from './BubblePage';
const eraseToken = () => {
  localStorage.setItem('token', '')
};

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
    axios
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        console.log('login',res)
        localStorage.setItem('token', res.data.payload)
        console.log('login local',localStorage.getItem('token'))

      })
      .catch(err => console.log(err.response));
  };
  
  render() {
      return (
    <div>
        <button onClick={eraseToken}
        >Log Out</button>
            <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
{ localStorage.getItem('token') &&  <Link to={`/protected`}>
              <BubblePage />
    </Link> 
}
 </div>
    );
  }
}

export default Login;
