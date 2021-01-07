import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { getUserPlants } from "./../Actions";
import NewPlant from "./../UserPlantsComponents/NewPlant";

const UserPlants = ({userPlants, getUserPlants}) => {
  const history = useHistory();

  useEffect(()=>{
    getUserPlants();
  },[]);

  const handleEdit = () => {

  }

  const handleDelete = () => {

  }

  return (
    <div>
      <div>
        <h1>Your Plants :)</h1>
      </div>
      {userPlants.map((plant)=>{
        console.log(plant);
        return (
          <div>
            <h2>{plant.nickname}</h2>
            <p>Species: {plant.species}</p>
            <p>Watering Frequency: {plant.h2oFrequency}</p>
            <div> 
              <button onCLick={handleEdit} >Edit</button>
              <button onCLick={handleDelete} >Delete</button>
            </div>
          </div>
        );
      })}
      <div>
        <NewPlant />
      </div>
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userPlants: state.userPlants,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getUserPlants })(UserPlants);