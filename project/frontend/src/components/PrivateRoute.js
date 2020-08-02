import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, isAuthenicated, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) =>
        isAuthenicated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propType = {
  component: PropTypes.element.isRequired,
  isAuthenicated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuthenicated: state.authReducer.isAuthenicated,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
