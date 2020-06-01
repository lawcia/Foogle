import React from "react";
import PropTypes from "prop-types";

const SearchLocationInput = ({
  options,
  setSearchLocation,
  searchLocation,
  handleChange,
}) => {
  return (
    <div className="control has-icons-left stretch">
      <input
        className="input"
        type="text"
        name="searchLocation"
        placeholder="79 Borough Road"
        value={searchLocation}
        onChange={(event) => handleChange(event)}
      />
      <span className="icon is-small is-left">
        <i className="fas fa-map-marked-alt"></i>
      </span>
      {options.length > 0 && (
        <div id="place-options">
          {options.map(({ place_name: placeName }) => (
            <p
              key={placeName}
              className="place-option"
              tabIndex="0"
              role="button"
              aria-pressed="false"
              onClick={() => setSearchLocation(placeName)}
            >
              {placeName}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

SearchLocationInput.protoTypes = {
  options: PropTypes.array.isRequired,
  setSearchLocation: PropTypes.func.isRequired,
  searchLocation: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchLocationInput;
