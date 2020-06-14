import React from "react";
import "./Button.css";

const Button = ({ value, colour }) => (
  <button className={"button is-primary " + colour}>{value}</button>
);

export default Button;
