import React from "react";
import PropTypes from "prop-types";
import Button from "../../Buttons/Button";
import "./Signup.css";

const Signup = ({
  handleSubmit,
  handleChange,
  user,
  usernameError,
  emailError,
  passwordError,
}) => {
  return (
    <div className="form-div">
      <form className="Signup__form" onSubmit={handleSubmit}>
        <div className="Signup__row">
          <label className="Signup__label" htmlFor="username">
            Username
          </label>
          <input
            className={`input input-m Signup__input ${
              usernameError && "Signup__input--error"
            }`}
            onChange={handleChange}
            value={user.username}
            type="text"
            name="username"
            minLength="3"
            maxLength="25"
            id="username"
          />
          {usernameError && (
            <p className="Signup__text--error">{usernameError}</p>
          )}
        </div>
        <div className="Signup__row">
          <label className="Signup__label" htmlFor="email">
            Email
          </label>
          <input
            className={`input input-m Signup__input ${
              emailError && "Signup__input--error"
            }`}
            onChange={handleChange}
            value={user.email}
            type="email"
            name="email"
            maxLength="50"
            id="email"
          />
          {emailError && <p className="Signup__text--error">{emailError}</p>}
        </div>
        <div className="Signup__row">
          <label className="Signup__label" htmlFor="password">
            Password
          </label>
          <input
            className={`input input-m Signup__input ${
              passwordError && "Signup__input--error"
            }`}
            onChange={handleChange}
            value={user.password}
            type="password"
            name="password"
            minLength="6"
            maxLength="20"
            id="password"
          />
          {passwordError && (
            <p className="Signup__text--error">{passwordError}</p>
          )}
        </div>
        <div className="Signup__row">
          <label className="Signup__label" htmlFor="password2">
            Repeat password
          </label>
          <input
            className={`input input-m Signup__input ${
              passwordError && "Signup__input--error"
            }`}
            onChange={handleChange}
            value={user.password2}
            type="password"
            name="password2"
            id="password2"
          />
        </div>
        <Button value="Sign up" colour="blue" />
      </form>
    </div>
  );
};

Signup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  usernameError: PropTypes.string,
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
};

export default Signup;
