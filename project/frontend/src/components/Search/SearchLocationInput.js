import React from "react";

const SearchLocationInput = (props) => (
  <div className="control has-icons-left stretch">
    <input
      className="input"
      type="text"
      name="searchLocation"
      onChange={props.handleChangeLocation}
      placeholder="79 Borough Road"
    />
    <span className="icon is-small is-left">
      <i class="fas fa-map-marked-alt"></i>
    </span>
    <p>{this.props.match}</p>
  </div>
);

export default SearchLocationInput;
