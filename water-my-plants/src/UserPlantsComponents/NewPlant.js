import React, {useState} from "react";
import {connect} from 'react-redux'
import {postPlant, getUserPlants} from '../Actions/index'
import styled from 'styled-components'

const Wrapper = styled.div`
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

const Label = styled.label`
  color: white;
`

const Input = styled.input`
  margin-bottom: 2rem;
  margin-left: 1rem;
  border: 1px solid #cbd5e0;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
`

function Plant({postPlant, getUserPlants}) {
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
    postPlant(formValues);
    setFormValues(initialValues);
    getUserPlants();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper>
        <h2 style={{color: 'white'}}>Add a Plant!</h2>
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
          <Button type='submit' onSubmit={handleSubmit}>Add to your profile</Button>
      </Wrapper>
    </form>
  )
}

const mapStateToProps = (state)=>{
  return{
    userPlants: state.userPlants,
    error: state.error
  }
}
export default connect(mapStateToProps, {postPlant, getUserPlants})(Plant)