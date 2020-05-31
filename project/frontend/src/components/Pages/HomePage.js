import React from "react";
import axios from "axios";
import SearchForm from "../Search/SearchForm";

const features = [
  {
      "place_name": "London, Greater London, England, United Kingdom",
      "center": [
          -0.1275,
          51.50722
      ]
  },
  {
      "place_name": "London, Ontario, Canada",
      "center": [
          -81.246,
          42.9881
      ]
       },
  {
      "place_name": "Enfield, Greater London, England, United Kingdom",
      "center": [
          -0.06,
          51.645
      ],
   },
  {
      "place_name": "Londonderry, Derry, Northern Ireland, United Kingdom",
      "center": [
          -7.34167,
          54.99167
      ],
     }
];


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
      <div className="container flex-center">
        <label className="label home-label">Find somewhere to eat.</label>
        <SearchForm features={features} />
        <div style={backgroundImage}></div>
      </div>
    );
  }
}

export default HomePage;
