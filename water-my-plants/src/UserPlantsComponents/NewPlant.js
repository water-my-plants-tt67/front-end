import React, {useState} from "react";
import {connect} from 'react-redux'
import {postPlant, getUserPlants} from '../Actions/index'

function Plant(props) {
  const initialValues = props.plant
  const [formValues, setFormValues] = useState(initialValues)
  const handleChange= (event) =>{

    setFormValues({
        ...formValues,
        [event.target.name]:event.target.value
    })
  }

  const handleSubmit =(event) => {
    event.preventDefault();
    props.postPlant(formValues);
    setFormValues(initialValues);
    props.getUserPlants();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Plant!</h2>
      <label>
        Name:
          <input
          name='nickname'
          type = 'text'
          placeholder='nickname'
          value={props.nickname}
          onChange={handleChange}
          />
        </label>

        <label>
          Species:
          <input
          name='species'
          type = 'text'
          placeholder='species'
          value={props.species}
          onChange={handleChange}
          />
        </label>
        <label>
          Watering Frequency:
          <input
          name='h2oFrequency'
          type = 'text'
          placeholder='h2oFrequency'
          value={props.h2oFrequency}
          onChange={handleChange}
          />
        </label>
        <button type='submit' onSubmit={handleSubmit}>Add to your profile</button>
    </form>
  )
}

const mapStateToProps = (state)=>{
  return{
    plant: state.plant,
    plants: state.plant,
    error: state.error
  }
}
export default connect(mapStateToProps, {postPlant, getUserPlants})(Plant)