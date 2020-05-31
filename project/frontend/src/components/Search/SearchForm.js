import React from "react";
import SearchLocationInput from "./SearchLocationInput";

const SearchForm = (props) => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <div className="flex-row">
        <div className="input-div">
          <div className="control has-icons-left stretch">
            <input
              className="input"
              type="text"
              name="searchKeyword"
              onChange={props.handleChangeKeyword}
              placeholder="Sushi"
            />
            <span className="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
          </div>
          <SearchLocationInput />
        </div>
        <button className="button is-primary margin" name="search">
          Search
        </button>
        <button
          className="button is-info margin"
          name="nearMe"
          onClick={(event) => props.getGeoPosition(event)}
        >
          <i className="fas fa-map-marker-alt"></i>Near me
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
