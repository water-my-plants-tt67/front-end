import React, {useEffect,} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { getUserPlants } from "./../Actions";

const UserPlants = ({userPlants, getUserPlants}) => {
  const history = useHistory();

  useEffect(()=>{
      getUserPlants();
  },[]);

  // const handleAddPlants = () => {
  //   history.push("")
  // }

  return (
    <div>
      {userPlants.map((plant)=>{
        return (
          <div>
            <h2>{plant.nickname}</h2>
            <p>{plant.species}</p>
            <p>{plant.h2oFrequency}</p>
          </div>
        );
      })}
      <div>
        {/* <button onClick={handleAddPlants} >Add Plants</button> */}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userPlants: state.plants,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getUserPlants })(UserPlants);