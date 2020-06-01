import React, { useState } from "react";
import SearchLocationInput from "./SearchLocationInput";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadFeatures } from "../../redux/actions/searchActions";

export const SearchForm = ({ features, loadFeatures }) => {
  const [searchLocation, setSearchLocation] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "searchLocation") {
      setSearchLocation(value);
      loadFeatures(searchLocation)
        .then(() => {})
        .catch((error) => console.log(error));
    }
  };

  return (
    <form className="form">
      <div className="flex-row">
        <div className="input-div">
          <div className="control has-icons-left stretch">
            <input
              className="input"
              type="text"
              name="searchKeyword"
              placeholder="Sushi"
            />
            <span className="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </div>
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
