import React,{useState} from "react";
import { connect } from 'react-redux';
import { useParams, useHistory } from "react-router-dom";

const PlantDetails = (props) => {
  const history = useHistory();
  const { userPlants } = props;
  const { id } = useParams();
  const initialValues = {
    nickname: '',
    species: '',
    h2oFrequency: ''
  }
  const [formValues, setFormValues] = useState(initialValues)

  const plant = userPlants.filter( (item) => {
    return item.id === id;
  });
//double check
  const handleDelete = (event) => {
    props.deletePlant(formValues);
    setFormValues(initialValues);
    props.getUserPlants();

  }

  return (
    <div>
      <h1>{plant.nickname}</h1>
      <p>{plant.species}</p>
      <p>{plant.h2oFrequency}</p>
      <button onClick={() => {history.push(`/your-plant/${plant.id}`)} } >Edit</button>
      <button onClick={handleDelete} >Delete</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userPlants: state.userPlants
  };
};

export default connect(mapStateToProps)(PlantDetails);

