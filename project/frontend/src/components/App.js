import React from "react";
import Navigation from "./Navigation";
import HomePage from "./Pages/HomePage";
import Results from "./Results";
import Favourites from "./Favourites";
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";
import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

class App extends React.Component {
  state = {
    searchKeyword: null,
    searchLocation: null,
    latitude: null,
    longitude: null,
    error: null,
    submitted: false,
    fetched: false,
    loggedIn: false,
    username: null,
    signedUp: false,
    match: null,
  };

  refreshState = () => {
    this.setState({ submitted: false, fetched: false, error: null });
  };

  handleChangeKeyword = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleChangeLocation = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    if (this.state.fetched) {
      this.setState({ submitted: true });
    }
    event.preventDefault();
  };

  // near me


  //set username
  setUsername = (username) => {
    this.setState({ username: username, loggedIn: true });
  };

  componentDidMount() {
    // get user id & jwt token from local storage
    // then refresh the token,
    // if token is expired logout user
    let token = localStorage.getItem("token");
    // let id = localStorage.getItem("id")
    if (token) {
      axios
        .post("/api/v1/refresh", { token: token })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.setState({ loggedIn: true });
        })
        .catch(() => this.setState({ loggedIn: false }));
    } else {
      this.setState({ loggedIn: false });
    }
  }

  logOut = () => {
    this.setState({ loggedIn: false });
  };

  signUpHandler = () => {
    this.setState({ signedUp: true });
  };

  render() {
    return (
      <Router>
        <div>
          <Navigation loggedIn={this.state.loggedIn} />
          <Switch>
            <Route path="/results">
              <Results
                searchKeyword={this.state.searchKeyword}
                longitude={this.state.longitude}
                latitude={this.state.latitude}
                refreshState={this.refreshState}
              />
            </Route>
            <Route exact path="/login">
              {this.state.loggedIn ? (
                <Redirect to="/favourites" />
              ) : (
                <Login
                  signUpHandler={this.signUpHandler}
                  setUsername={this.setUsername}
                />
              )}
            </Route>
            <Route exact path="/logout">
              {this.state.loggedIn ? (
                <Logout logOut={this.logOut} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route exact path="/signup" component={Signup} />

            <Route exact path="/favourites">
              <Favourites username={this.state.username} />
            </Route>
            <Route exact path="/">
              {this.state.submitted ? (
                <Redirect to="/results" />
              ) : (
                <HomePage
                  match={this.state.match}
                  handleChangeKeyword={this.handleChangeKeyword}
                  getGeoPosition={this.getGeoPosition}
                  handleSubmit={this.handleSubmit}
                />
              )}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
