import React, {useState} from 'react'
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

    const saveEdit=(e)=>{
        e.preventDefault()
        axiosWithAuth()
        .put(`plants/${plantToEdit.id}`, plantToEdit)
        .then((res) =>{
            const newPlant = plants.map((plant)=>{
                if (plant.id ===res.id){
                    return res.data
                }else{
                    return plant
                }
            })
            updatePlants(newPlant)
            getPlant()
        })
        .catch((err) =>{
            console.log(err)
        })
    }
}

const deletePlant= (plant) =>{
    axiosWithAuth()
    .delete(`plants/${plant.id}`)
    .then(res =>{
        const newPlants = plants.filter(item =>{
            return item.id !== res.data
        })
        updatePlants(newPlants)
        console.log(res)
    })
}

return (
    <div>
        <p>Plants</p>
        <ul>
            {plants.map((plant)=>(
                <li key={plant.plant} onClick={()=>editPlant(plant)}>
                    <span>
                        <span 
                        className='delete'
                        onClick={(e)=>{
                            e.stopPropagation()
                            deletePlant(plant)
                        }}
                        >

                        </span> {''}
                        {plant.plant}
                    </span>

                    <label>
                        plant name:
                        <input onChange={(e)=>
                        setPlantToEdit({...plantToEdit, plant: e.target.value})}
                        value={plantToEdit.plant}/>
                    </label>
                </li>
            ))}
        </ul>
    </div>
)