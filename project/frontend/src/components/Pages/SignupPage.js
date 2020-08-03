import React, { useState, useEffect } from "react";
import SignUp from "../Authentication/Signup/Signup";
import logo from "../../images/foogle.png";
import picture from "../../images/female-friends-hanging-out-cafe.jpg";
import "./SignupPage.css";
import { signupUser, loginUser } from "../../redux/actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const SignupPage = ({ signupUser, error: signupError, createdUser, isAuthenticated, loginUser }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
  });
  const [error, setError] = useState({
    username: null,
    email: null,
    password: null,
  });

  let history = useHistory();

  useEffect(() => {
    let username = signupError?.username ? signupError.username : null;
    let email = signupError?.email ? signupError.email : null;
    let password = signupError?.password ? signupError.password : null;
    setError({ username, email, password });
  }, [signupError]);

  useEffect(() => {
    if(createdUser){
      loginUser({ username: user.username, password: user.password })
      toast(`✨ ${user.username}, Welcome to foogle!`, {
        autoClose: 15000,
      });
    }
  }, [createdUser])

  useEffect(() => {
    if(isAuthenticated){
      history.push("/favourites")
    }
  }, [isAuthenticated])

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.password !== user.password2) {
      setError({ ...error, password: "Your passwords do not match" });
    } else {
      signupUser(user)
    }
  };

  return (
    <div className="Signup">
      <div className="Signup--left">
        <img className="Signup__logo" src={logo} alt="foogle logo" />
        <h3 className="Signup__heading">Create an account</h3>
        <SignUp
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          user={user}
          usernameError={error.username}
          emailError={error.email}
          passwordError={error.password}
        />
      </div>
      <div className="Signup--right">
        <h3 className="Signup__lead">Create an account today</h3>
        <ul className="Signup__list">
          <li className="Signup__listitem">
            Save restaurants to your favourites list
          </li>
          <li className="Signup__listitem">Share your profile with friends</li>
        </ul>
        <img src={picture} alt="restaurant picture" />
      </div>
    </div>
  );
};

SignupPage.propType = {
  signupUser: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  createdUser: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    error: state.authReducer.signupError,
    createdUser: state.authReducer.createdUser,
    isAuthenticated: state.authReducer.isAuthenticated
  };
};

const mapDispatchToProps = {
  signupUser,
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
