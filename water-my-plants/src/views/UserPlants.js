import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { getUserPlants, getPlant } from "./../Actions";
import NewPlant from "./../UserPlantsComponents/NewPlant";

const Component = styled.div`
  background: linear-gradient(to right, lightgreen, lightgrey);
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(darkgreen, white);
  border-radius: .375rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
  margin-bottom: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  width: 10rem;
  padding-bottom: 1rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SuperMapWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
`

const PlantWrapper = styled.div`

`

const PlantButton = styled.button`
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

const LogoutButton = styled.button`
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

const UserPlants = ({userPlants, getUserPlants, getPlant}) => {
  const history = useHistory();

  useEffect(()=>{
    getUserPlants();
  },[]);

  const handleLogOut = () =>{
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <Component>
      <Wrapper>
        <h1 style={{color: 'darkgreen'}}>Your Plants</h1>
      </Wrapper>
      <SuperMapWrapper>
        {userPlants.map((plant)=>{
          // console.log(plant);
          return (
            <MapWrapper>
              <h2 style={{color: 'white'}}>{plant.nickname}</h2>
              <ButtonWrapper> 
                <PlantButton onClick={(evt) => {
                  evt.preventDefault();
                  getPlant(plant);
                  history.push(`/your-plant/${plant.id}`);
                }} >Plant Details</PlantButton>
              </ButtonWrapper>
            </MapWrapper>
          );
        })}
      </SuperMapWrapper>
      <PlantWrapper>
        <NewPlant />
      </PlantWrapper>

      <ButtonWrapper>
        <LogoutButton onClick={handleLogOut} >Log Out</LogoutButton>
      </ButtonWrapper>

    </Component>
  );
}

const mapStateToProps = state => {
  return {
    userPlants: state.userPlants,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getUserPlants, getPlant })(UserPlants);