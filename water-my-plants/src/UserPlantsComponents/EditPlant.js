import React, {useState} from "react";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import {putPlant, getUserPlants} from '../Actions/index'

const EditPlant = (props) => {
  const { putPlant, getUserPlants } = props;
  const history = useHistory();

  const initialValues = {
    nickname: '',
    species: '',
    h2oFrequency: ''
  }
  const [formValues, setFormValues] = useState(initialValues)

  const handleChange= (event) =>{
    setFormValues({
        ...formValues,
        [event.target.name]:event.target.value
    })
  }

  const handleSubmit =(event) => {
    event.preventDefault();
    putPlant(formValues);
    setFormValues(initialValues);
    getUserPlants();
    history.push("/plants");
  }

  return (
    <form onSubmit={handleSubmit}>

      <h2>Edit a Plant!</h2>

      <label>
        Name:
          <input
          name='nickname'
          type = 'text'
          placeholder='nickname'
          value={formValues.nickname}
          onChange={handleChange}
          />
        </label>

        <label>
          Species:
          <input
          name='species'
          type = 'text'
          placeholder='species'
          value={formValues.species}
          onChange={handleChange}
          />
        </label>
        <label>
          Watering Frequency:
          <input
          name='h2oFrequency'
          type = 'text'
          placeholder='h2oFrequency'
          value={formValues.h2oFrequency}
          onChange={handleChange}
          />
        </label>
        <button type='submit' onSubmit={handleSubmit}>Update</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    userPlants: state.userPlants,
    plant: state.plant
  };
};

export default connect(mapStateToProps, { getUserPlants, putPlant })(EditPlant);