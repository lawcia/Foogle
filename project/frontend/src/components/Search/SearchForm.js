import React from "react";

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
