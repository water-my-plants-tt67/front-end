import React from 'react'
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
    width: 50rem;
    height: 50vh;
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

const Error = styled.div`
    color: red;
`

const Signup = (props) => {
    const { signupValues, change, errors, buttonDisabled, data } = props

    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()    
        axios.post('https://tt67-bw.herokuapp.com/users/register', signupValues)
        .then(res =>{
            alert=(res)
            .push('users/login')
            console.log(signupValues)
        })
        .catch(error => {
            console.log(error)
        })
    }
        

    return (
        <Wrapper>
            <Title>Signup</Title>
            <FormWrapper>
                <form>
                    <Section>
                        <SectionTitle>Username</SectionTitle>
                        <Input type='text' name='username' value={signupValues.username} onChange={change} />
                        <Error>{errors.username}</Error>
                    </Section>
                    <Section>
                        <SectionTitle>Phone</SectionTitle>
                        <Input type='text' name='telephone' value={signupValues.telephone} onChange={change} />
                        <Error>{errors.phone}</Error>
                    </Section>
                    <Section>
                        <SectionTitle>Password</SectionTitle>
                        <Input type='text' name='password' value={signupValues.password} onChange={change} />
                        <Error>{errors.password}</Error>
                    </Section>
                    <Section>
                        <SubmitButton onClick= {handleSubmit} disabled={buttonDisabled}>Submit</SubmitButton>
                    </Section>
                </form>
            </FormWrapper>
        </Wrapper>
    )
}

export default Signup