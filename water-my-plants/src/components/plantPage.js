import react, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../utils/axiosAuth'

const [plantlist, setPlantList]= useState([])

const getPlant = ()=>{
    axiosWithAuth()
    .get('user/plants')
    .then(res =>{
        setPlantList(res.data)
    })
    .catch(err => console.log(err))
}

useEffect(()=>{
    getPlant()
},[])

return(
    <>
    <Plantlist/>
    </> 

)