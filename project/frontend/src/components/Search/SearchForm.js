import React, { useState } from "react";
import SearchLocationInput from "./SearchLocationInput";
import PropTypes from "prop-types";

const SearchForm = ({ features }) => {
  const [searchLocation, setSearchLocation] = useState("");
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "searchLocation") setSearchLocation(value);
  }

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
};

export default SearchForm;
