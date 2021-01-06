/* import React, {useState} from 'react'
import {axiosWithAuth} from '../utils/axiosAuth'
import {useParams} from 'react-router-dom'

const initialPlant = {
    nickname:'',
    species:'',
    h2oFrequency:'',
}

const Plantlist = ({plants, updatePlants, getPlant})=>{
    console.log(plants)
    const [editing, setEditing]= useState(false)
    const [plantToEdit, setPlantToEdit]= useState(initialPlant)

    const editPlant =(plant)=>{
        setEditing(true)
        setPlantToEdit(plant)
    };

    const saveEdit(e)=>{
        e.preventDefault()
        axiosWithAuth()
        .put(`user/plants/${plantToEdit.id}`, plantToEdit)
        .then((res) =>{
            const newPlant = plants.map((plant)=>{
                if (plant.id ===res.id){
                    return res.data
                }
            })
        })
    }
} */