import React from "react";

const SearchLocationInput = ({ options }) => (
  <div className="control has-icons-left stretch">
    <input
      className="input"
      type="text"
      name="searchLocation"
      placeholder="79 Borough Road"
    />
    <span className="icon is-small is-left">
      <i class="fas fa-map-marked-alt"></i>
    </span>
    <div id="place-options">
      {options.map(({ place_name }) => (
        <p key={place_name} className="place-option">
          {place_name}
        </p>
      ))}
    </div>
  </div>
);

export default SearchLocationInput;
