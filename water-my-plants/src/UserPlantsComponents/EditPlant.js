import React, {useState} from "react";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

const EditPlant = (props) => {
  const { userPlants } = props;
  const { id } = useParams();

  const plant = userPlants.filter( (item) => {
    return item.id === id;
  });

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

  const handleSubmit = () => {
    
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
        <button type='submit' onSubmit={handleSubmit}>Add to your profile</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    userPlants: state.userPlants
  };
};

export default connect(mapStateToProps)(EditPlant);