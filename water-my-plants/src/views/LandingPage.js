import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import DaCarousel from '../components/Carousel'

const MainWrapper = styled.div`
    background: linear-gradient(to right, lightgreen, lightgrey);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    color: darkgreen;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Description = styled.p`
    font-size: 1.2rem;
    color: darkgreen;
`

const Login = styled.button`
    margin-right: 2rem;
    padding: 1.5rem 2rem;
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

const SignUp = styled.button`
    margin-left: 2rem;
    padding: 1.5rem 1.6rem;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
    border-radius: .375rem;
    background-color: green;
    color: white;
    transition: .25s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: white;
        color: darkgreen;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    margin-bottom: 2rem;
`

const LandingPage = () => {
    const history = useHistory()
    const handleLogin = () => {
        history.push('/login')
    }
    const handleSignUp = () => {
        history.push('/signup')
    }

    return (
        <MainWrapper>
            <Title>Water My Plants</Title>
            <Wrapper>
                <Description>Keeping your plants happy and healthy.</Description>
                <DaCarousel />
                <ButtonWrapper>
                    <Login onClick={handleLogin}>Login</Login>
                    <SignUp onClick={handleSignUp}>Sign Up</SignUp>
                </ButtonWrapper>
            </Wrapper>
        </MainWrapper>
    )
}

export default LandingPage