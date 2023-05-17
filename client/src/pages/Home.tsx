import React, { useState, useEffect } from "react";
import { searchTrefleAPI } from "../utils/TrefleAPI";

const Home = () => {

    const [searchedPlants, setSearchedPlants] = useState([])
    const handleSearchTrefleAPI = async (token: any, query: any) => {

    
        try {
            const response = await searchTrefleAPI(token, query)
            if (!response.ok) {
                throw new Error('something went wrong!')
            }
            const { items } = await response.json();
            const plantData = items.map((plant: any) => ({
                plantName: plant.id,
                // plantImage: plant.image_url
            }));
            setSearchedPlants(plantData)
        } catch (err) {
            console.error(err)
        }
    }
    
    return (
        <div>
            <h1>This is the Home Page</h1>
            <div>
            {/* <button onClick={() => {handleSearchTrefleAPI(`XC-QTj1ss7g2Wy0TeiT9kjK-icsjX5s7-W7ZD1FjaXk`, `pothos`)}}>Click</button> */}
            <button onClick={() => {handleSearchTrefleAPI(`sk-k5vt646417c428ab7960`, `fern`)}}>CLick</button>
 
            <div>{searchedPlants}</div>
            {searchedPlants.map((plant: any) => {
                return (
                    <>
                    <div>{plant.plantName}</div>
                    {/* <img src={plant.plantImage}></img> */}
                    </>
                );
            })}
            </div>
        </div>
    )
}

export default Home