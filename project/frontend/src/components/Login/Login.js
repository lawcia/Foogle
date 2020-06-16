import React, { useState } from "react";
import Button from "../Buttons/Button";
import "./Login.css";

const Login = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Login">
      <form className="Login__form" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input
          className="input input-m"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          placeholder="Enter your username"
          value={username}
        />
        <input
          className="input input-m"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
        />
        {error && (
          <p className="align-text error-msg">{error}</p>
        )}
        <Button value="Log in" colour="blue"/>
      </form>
    </div>
  );
};

export default Login;
