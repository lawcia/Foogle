import React from "react";
import PropTypes from "prop-types";
import "./SearchLocationInput.css";

const SearchLocationInput = ({
  options,
  setSearchLocation,
  searchLocation,
  handleChange,
  setShowDropdown,
  showDropdown
}) => {
  return (
    <div className="control has-icons-left location-input">
      <input
        className="input"
        type="text"
        name="searchLocation"
        placeholder="79 Borough Road"
        value={searchLocation}
        onChange={(event) => handleChange(event)}
        onClick={() => setShowDropdown(true)}
      />
      <span className="icon is-small is-left">
        <i className="fas fa-map-marked-alt"></i>
      </span>
      {(options.length > 0 || showDropdown) && (
        <div id="place-options" className="location-input__dropdown">
           <p
           className="current-location"
           tabIndex="0"
           role="button"
           aria-pressed="false"
           ><i className="fas fa-map-marker-alt location-input__icon"></i>Use current location</p>
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
  setShowDropdown: PropTypes.func.isRequired,
  showDropdown: PropTypes.bool.isRequired,
};

export default SearchLocationInput;
