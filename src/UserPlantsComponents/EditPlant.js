import React, {useState} from "react";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import {putPlant, getUserPlants} from '../Actions/index'
import styled from 'styled-components'


const Wrapper = styled.div`
  background: linear-gradient(to right, lightgreen, lightgrey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Input = styled.input`
  border: 1px solid #cbd5e0;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
  margin-bottom: 2rem;
`

const Label = styled.label`
  color: darkgreen;
`

const Button = styled.button`
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
    let idArr = history.location.pathname.split('/')
    formValues.id = idArr[2]
    putPlant(formValues);
    setFormValues(initialValues);
    getUserPlants();
    history.push("/plants");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <h2 style={{color: 'darkgreen'}}>Edit Your Plant!</h2>

        <Label>
          Name:
            <Input
            name='nickname'
            type = 'text'
            placeholder='nickname'
            value={formValues.nickname}
            onChange={handleChange}
            />
          </Label>

          <Label>
            Species:
            <Input
            name='species'
            type = 'text'
            placeholder='species'
            value={formValues.species}
            onChange={handleChange}
            />
          </Label>
          <Label>
            Water:
            <Input
            name='h2oFrequency'
            type = 'text'
            placeholder='h2oFrequency'
            value={formValues.h2oFrequency}
            onChange={handleChange}
            />
          </Label>
          <Button type='submit' onSubmit={handleSubmit}>Update</Button>
      </Wrapper>

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