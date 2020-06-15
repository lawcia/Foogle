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
    loggedIn: false,
    username: null,
    signedUp: false,
  };

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
              <Results />
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
                <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
