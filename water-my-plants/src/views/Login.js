import React, {useState}from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Wrapper = styled.div`
    background: linear-gradient(to right, lightgreen, lightgrey);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    color: darkgreen;
`

const FormWrapper = styled.div`
    background: linear-gradient(darkgreen, white);
    width: 40rem;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: .375rem;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SectionTitle = styled.h3`
    color: white;
`

const Input = styled.input`
    border: 1px solid #cbd5e0;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
`

const SubmitButton = styled.button`
    margin-top: 2rem;
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
const initial = {
    username: '',
    password: '',
  }

const Login = () => {
    const [data, setData]=useState(initial)

    const handleChange = (event) =>{

        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }

    const history = useHistory()

    const submit = (event) => {
        event.preventDefault()
    }

    axios.post('https://tt67-bw.herokuapp.com/users/login', data)
        .then(res =>{
            localStorage.setItem('token',res.data.payload)
            .push('/plants')
        })
        .catch(error => {
            console.log(error)
        })


    return (
        <Wrapper>
            <Title>Login</Title>
            <FormWrapper>
                <form>
                    <Section>
                        <SectionTitle>Username</SectionTitle>
                        <Input 
                        type='text' 
                        name='username'
                        placeholder='Username' 
                        value={data.username}
                        onChange={handleChange} 
                        />
                    </Section>
                    <Section>
                        <SectionTitle>Password</SectionTitle>
                        <Input 
                         type='password'
                         name='password'
                         placeholder="Password"
                         value={data.password}
                         onChange={handleChange}
                         />
                    </Section>
                    <Section>
                        <SubmitButton onClick={submit}>Submit</SubmitButton>
                    </Section>
                </form>
            </FormWrapper>
        </Wrapper>
    )
}

export default Login