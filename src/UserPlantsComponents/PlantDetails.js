import React from "react";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import styled from 'styled-components'

import { deletePlant, getUserPlants, getPlant } from "./../Actions/index";

const Wrapper = styled.div`
  background: linear-gradient(to right, lightgreen, lightgrey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Button = styled.button`
  margin-top: 1rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
  border-radius: .375rem;
  background-color: lightgreen;
  color: white;
  transition: .25s ease-in-out;

  &:hover {
      cursor: pointer;
      background-color: white;
      color: darkgreen;
  }
`

const DoubleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(darkgreen, white);
  border-radius: .375rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
  width: 40rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
`

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
    <Wrapper>
      <DoubleWrapper>
        <h1 style={{color: 'white'}}>{plant.nickname}</h1>
        <p style={{color: 'white'}}>{plant.species}</p>
        <p style={{color: 'white'}}>{plant.h2oFrequency}</p>
        <Button onClick={(evt) => {
          evt.preventDefault();
          history.push(`/edit-plant/${plant.id}`)
        } } >Edit</Button>
        <Button onClick={handleDelete} >Delete</Button>
      </DoubleWrapper>
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    userPlants: state.userPlants,
    plant: state.plant
  };
}

export default connect(mapStateToProps, {deletePlant, getUserPlants, getPlant})(PlantDetails);
