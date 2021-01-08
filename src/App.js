import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import LandingPage from './views/LandingPage'
import Login from './views/Login'
import * as yup from 'yup'
import Schema from './Schema'
import Signup from './views/Signup'
import UserPlants from "./views/UserPlants";
import PrivateRoute from "./utils/PrivateRoute";
import PlantDetails from "./UserPlantsComponents/PlantDetails";
import EditPlant from "./UserPlantsComponents/EditPlant";

const defaultSignupValues = {
    username: '',
    telephone: '',
    password: ''
}

const defaultErrors = {
    username: '',
    password: ''
}

const App = () => {
    const [signupValues, setSignupValues] = useState(defaultSignupValues)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [errors, setErrors] = useState(defaultErrors)
    
    const change = (event) => {
        const { name, value } = event.target
        validate(name, value)
        setSignupValues({ ...signupValues, [name]: event.target.value })
    }

    const validate = (name, value) => {
        yup
            .reach(Schema, name)
            .validate(value)
            .then((valid) => {
                setErrors({ ...errors, [name]: '' })
            })
            .catch((err) => {
                setErrors({ ...errors, [name]: err.errors[0] })
            })
    }

    useEffect(() => {
        Schema.isValid(signupValues).then((valid) => {
            setButtonDisabled(!valid)
        })
    }, [signupValues])

    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <LandingPage />
                </Route>

                <Route exact path='/login'>
                    <Login />
                </Route>

                <Route exact path='/signup'>
                    <Signup signupValues={signupValues} change={change} errors={errors} buttonDisabled={buttonDisabled} />
                </Route>

                <PrivateRoute 
                    exact path= '/plants' 
                    component={UserPlants} 
                />

                <PrivateRoute 
                    exact path= "/your-plant/:id"
                    component={PlantDetails} 
                />
                
                <PrivateRoute 
                    exact path= "/edit-plant/:id"
                    component={EditPlant} 
                />

            </Switch>
        </div>
    )
}

export default App