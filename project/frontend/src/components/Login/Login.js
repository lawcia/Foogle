import React, { useState, useEffect } from "react";
import Button from "../Buttons/Button";
import logo from "../../images/foogle.png";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import "./Login.css";

export const Login = ({ error, loginUser, isAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({ username, password }).catch((error) => console.log(error));
  };

  let history = useHistory();

  // useEffect(() => {
  //   isAuthenticated ? history.push("/favourites") : null;
  // }, [isAuthenticated])

  return (
    <div className="Login">
      <img className="Login__logo" src={logo} alt="foogle logo" />
      <h3 className="Login__heading">Welcome back</h3>
      {error && error.length > 0 && (
        <div className="Login--error">
          {error.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <form className="Login__form" onSubmit={handleSubmit}>
        <label className="Login__label" htmlFor="username">
          Username
        </label>
        <input
          className="input input-m Login__input"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          value={username}
        />
        <label className="Login__label" htmlFor="password">
          Password
        </label>
        <input
          className="input input-m Login__input"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          value={password}
        />
        <Button value="Log in" colour="blue" />
      </form>
      <div>
        <p>
          New to foogle? <Link to="/signup">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  error: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    error: state.authReducer.loginError,
    isAuthenticated: state.authReducer.isAuthenticated,
  };
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
