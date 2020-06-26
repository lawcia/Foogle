import React from "react";
import PropTypes from "prop-types";

const Signup = ({
  handleSubmit,
  handleChange,
  user,
  usernameError,
  emailError,
}) => {
  return (
    <div className="form-div">
      <form className="user-form" onSubmit={handleSubmit}>
        <input
          className="input input-m"
          onChange={handleChange}
          value={user.username}
          type="text"
          name="username"
          placeholder="Create a username"
          minLength="3"
          maxLength="25"
          required
        />
        {usernameError && (
          <p className="align-text error-msg">{usernameError}</p>
        )}
        <input
          className="input input-m"
          onChange={handleChange}
          value={user.email}
          type="email"
          name="email"
          placeholder="Enter your email address"
          maxLength="50"
          required
        />
        {emailError && <p className="align-text error-msg">{emailError}</p>}
        <input
          className="input input-m"
          onChange={handleChange}
          value={user.password}
          type="password"
          name="password"
          placeholder="Create a password"
          minLength="6"
          maxLength="20"
          required
        />
        <input
          className="input input-m"
          onChange={handleChange}
          value={user.password2}
          type="password"
          name="password2"
          placeholder="Please repeat your password"
          required
        />
        <button className="button is-success input-m">Sign up</button>
      </form>
    </div>
  );
};

Signup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  usernameError: PropTypes.object.isRequired,
  emailError: PropTypes.object.isRequired
}

export default Signup;
