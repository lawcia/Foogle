import React, { useState } from "react";
import SearchLocationInput from "../SearchLocationInput/SearchLocationInput";
import SearchKeywordInput from "../SearchKeywordInput/SearchKeywordInput";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadFeatures } from "../../../redux/actions/searchActions";
import "./SearchForm.css";

export const SearchForm = ({ features, loadFeatures }) => {
  const [searchLocation, setSearchLocation] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "searchLocation") {
      setSearchLocation(value);
      loadFeatures(searchLocation)
        .then(() => {})
        .catch((error) => console.log(error));
    }  else if (name === "searchKeyword") {
      setSearchKeyword(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form className="form">
      <div className="form__container">
        <div className="form__inputs-container">
          <SearchKeywordInput 
            searchKeyword={searchKeyword}
            handleChange={handleChange}
          />
          <SearchLocationInput
            options={features}
            searchLocation={searchLocation}
            setSearchLocation={setSearchLocation}
            handleChange={handleChange}
          />
        </div>
        <button className="button is-primary margin" name="search">
          Search
        </button>
        <button className="button is-info margin" name="nearMe">
          <i className="fas fa-map-marker-alt"></i>Near me
        </button>
      </div>
    </form>
  );
};

SearchForm.protoTypes = {
  features: PropTypes.array.isRequired,
  loadFeatures: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { features: state.features };
};

const mapDispatchToProps = {
  loadFeatures,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
