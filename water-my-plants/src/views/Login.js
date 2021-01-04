import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

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

const Login = () => {
    const history = useHistory()
    const submit = () => {

    }

    return (
        <Wrapper>
            <Title>Login</Title>
            <FormWrapper>
                <form>
                    <Section>
                        <SectionTitle>Username</SectionTitle>
                        <Input />
                    </Section>
                    <Section>
                        <SectionTitle>Password</SectionTitle>
                        <Input />
                    </Section>
                    <Section>
                        <SubmitButton>Submit</SubmitButton>
                    </Section>
                </form>
            </FormWrapper>
        </Wrapper>
    )
}

export default Login