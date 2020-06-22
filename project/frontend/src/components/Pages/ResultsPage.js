import React, { useEffect } from "react";
import { loadRestaurants } from "../../redux/actions/resultsActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Restaurant from "../Restaurant/Restaurant";

export const ResultsPage = ({ restaurants, loadRestaurants }) => {
  useEffect(() => {
    loadRestaurants().catch((error) => console.log(error));
  }, []);

  return (
    <div className="ResultsPage">
      {restaurants.map(({restaurant}) => (<Restaurant key={restaurant.id} res={restaurant}/>))}
    </div>
  );
};

ResultsPage.propTypes = {
  restaurants: PropTypes.array.isRequired,
  loadRestaurants: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    restaurants: state.resultsReducer.restaurants,
  };
};

const mapDispatchToProps = {
  loadRestaurants,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
