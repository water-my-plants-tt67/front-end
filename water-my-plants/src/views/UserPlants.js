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
            <div> 
              <button onClick={() => {history.push(`/your-plant/${plant.id}`)}} >Plant Details</button>
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