import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { useParams, useHistory } from "react-router-dom";

const PlantDetails = ({plant}) => {
  // const [plant, setPlant] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  const handleDelete = () => {

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
};

export default connect(mapStateToProps)(PlantDetails);

