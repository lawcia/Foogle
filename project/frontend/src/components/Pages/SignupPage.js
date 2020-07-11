import React, { useState } from "react";
import SignUp from "../Authentication/Signup/Signup";

const SignupPage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    password2: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    if (user.password !== user.password2) {
      alert("Your passwords do not match");
    }
  };

  return (
    <SignUp
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      user={user}
      usernameError={null}
      emailError={null}
      passwordError={null}
    />
  );
};

export default SignupPage;
