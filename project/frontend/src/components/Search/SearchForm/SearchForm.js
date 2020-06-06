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
  const [showDropdown, setShowDropdown] = useState(false);
  
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
            setShowDropdown={setShowDropdown}
            showDropdown={showDropdown}
          />
        </div>
        <button className="button is-primary margin" name="search">
          Search
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
