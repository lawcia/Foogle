import React, { useEffect, useState } from "react";
import * as api from "../../api/unsplashApi";
import SearchForm from "../Search/SearchForm/SearchForm";
import "./HomePage.css";

const HomePage = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    api.getRandomImage().then((randomImage) => setImage(randomImage));
  }, []);

  const backgroundImage = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="container home">
      <div className="home-search__container">
        <h1 className="home__label">Find somewhere to eat.</h1>
        <SearchForm />
      </div>
      <div className="home__image" style={backgroundImage}></div>
    </div>
  );
};

export default HomePage;
