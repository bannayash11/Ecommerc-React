import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/user/authActions';

const Login = () => {
  const dispatch = useDispatch();


  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = credentials;
    dispatch(login(username, password));  // Pass history to the login action
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            autoComplete='off'
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form><br/><br/>
    </div>
  );
};

export default Login;
