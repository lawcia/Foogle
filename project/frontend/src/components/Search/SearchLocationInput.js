import React from "react";

const SearchLocationInput = () => (
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
  </div>
);

export default SearchLocationInput;
