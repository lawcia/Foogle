import React from "react";
import PropTypes from "prop-types";
import "./SearchKeywordInput.css";

const SearchKeywordInput = ({
  searchKeyword,
  handleChange,
}) => {
  return (
    <div className="control has-icons-left stretch">
      <input
        className="input"
        type="text"
        name="searchKeyword"
        placeholder="Sushi"
        value={searchKeyword}
        onChange={(event) => handleChange(event)}
      />
      <span className="icon is-small is-left">
        <i className="fas fa-search"></i>
      </span>
    </div>
  );
};

SearchKeywordInput.protoTypes = {
  searchKeyword: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SearchKeywordInput;