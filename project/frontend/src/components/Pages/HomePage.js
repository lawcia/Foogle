import React from "react";
import axios from "axios";
import SearchForm from "../Search/SearchForm/SearchForm";
import "./HomePage.css";

class HomePage extends React.Component {
  state = {
    randomImage: null,
  };

  getRandomImage = () => {
    axios
      .get(
        "https://source.unsplash.com/featured/1600x900/?food,restaurant,cafe"
      )
      .then((response) =>
        this.setState({ randomImage: response.request.responseURL })
      );
  };

  componentDidMount() {
    this.getRandomImage();
  }

  render() {
    const backgroundImage = {
      backgroundImage: `url(${this.state.randomImage})`,
      backgroundColor: "grey",
      width: "100vw",
      height: "50vh",
      backgroundPosition: "center center",
      backgroundSize: "cover",
    };

    return (
      <div className="container home">
        <div className="home-search__container">
        <h1 className="home__label">Find somewhere to eat.</h1>
        <SearchForm />
        </div>
        <div style={backgroundImage}></div>
      </div>
    );
  }
}

export default HomePage;
