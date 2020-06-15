import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchLocationInput from "../SearchLocationInput/SearchLocationInput";
import SearchKeywordInput from "../SearchKeywordInput/SearchKeywordInput";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  loadFeatures,
  getCurrentPosition,
  updateCoordinates,
  updateSearchKeyword,
} from "../../../redux/actions/searchActions";
import Button from "../../Buttons/Button";
import "./SearchForm.css";

export const SearchForm = ({
  features,
  loadFeatures,
  getCurrentPosition,
  matchedLocation,
  updateCoordinates,
  updateSearchKeyword,
}) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setSearchLocation(matchedLocation);
  }, [matchedLocation]);

  let history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "searchLocation") {
      setSearchLocation(value);
      loadFeatures(searchLocation).catch((error) => console.log(error));
    } else if (name === "searchKeyword") {
      setSearchKeyword(value);
      updateSearchKeyword(value);
    }
  };

  const handleClick = (event, location = "__NEAR_ME__") => {
    if (location === "__NEAR_ME__") {
      matchedLocation.length === 0
        ? getCurrentPosition().catch((error) => console.log(error))
        : setSearchLocation(matchedLocation);
    } else {
      const { placeName, longitude, latitude } = location;
      setSearchLocation(placeName);
      updateCoordinates({ longitude, latitude });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/results");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__container">
        <div className="form__inputs-container">
          <SearchKeywordInput
            searchKeyword={searchKeyword}
            handleChange={handleChange}
          />
          <SearchLocationInput
            options={features}
            searchLocation={searchLocation}
            handleClick={handleClick}
            handleChange={handleChange}
            setShowDropdown={setShowDropdown}
            showDropdown={showDropdown}
          />
        </div>
        <Button value="Search" colour="blue" />
      </div>
    </form>
  );
};

SearchForm.protoTypes = {
  features: PropTypes.array.isRequired,
  loadFeatures: PropTypes.func.isRequired,
  getCurrentPosition: PropTypes.func.isRequired,
  matchedLocation: PropTypes.string,
  updateCoordinates: PropTypes.func.isRequired,
  updateSearchKeyword: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    features: state.features,
    matchedLocation: state.matchedLocation,
  };
};

const mapDispatchToProps = {
  loadFeatures,
  getCurrentPosition,
  updateCoordinates,
  updateSearchKeyword,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
