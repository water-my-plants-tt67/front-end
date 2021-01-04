import * as yup from 'yup'

const Schema = yup.object().shape({
    username: yup.string().required().min(5, 'minimum 5 characters'),
    phone: yup.string().required().min(10, 'should be 10 characters').max(10, 'should be 10 characters'),
    password: yup.string().required().min(8, 'minimum 8 characters')
})

export default Schema