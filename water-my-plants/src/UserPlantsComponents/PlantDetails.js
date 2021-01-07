import React from "react";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import { deletePlant, getUserPlants, getPlant } from "./../Actions/index";

const PlantDetails = ({plant, deletePlant, getUserPlants, getPlant}) => {
  const history = useHistory();

//double check
  const handleDelete = (event) => {
    event.preventDefault();
    deletePlant(plant);
    getPlant({});
    getUserPlants();
    history.push("/plants");
  }

  return (
    <div>
      <h1>{plant.nickname}</h1>
      <p>{plant.species}</p>
      <p>{plant.h2oFrequency}</p>
      <button onClick={(evt) => {
        evt.preventDefault();
        history.push(`/edit-plant/${plant.id}`)
      } } >Edit</button>
      <button onClick={handleDelete} >Delete</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userPlants: state.userPlants,
    plant: state.plant
  };
}

export default connect(mapStateToProps, {deletePlant, getUserPlants, getPlant})(PlantDetails);
