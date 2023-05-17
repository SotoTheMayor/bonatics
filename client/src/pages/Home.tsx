import React, { useState, useEffect } from "react";
import { searchTrefleAPI } from "../utils/TrefleAPI";
import Tile from "./Tile";

const homeTiles = [
    {
        title: "HOUSE PLANTS",
        image: "require (an image from the DB)",
        description: "maybe a description?",
        url: "route to the page",
      },
      {
        title: "TROPICAL PLANTS",
        image: "require (an image from the DB)",
        description: "maybe a description?",
        url: "route to the page",
      },
      {
        title: "TREES",
        image: "require (an image from the DB)",
        description: "maybe a description?",
        url: "route to the page",
      },
      {
        title: "POPULAR",
        image: "require (an image from the DB)",
        description: "maybe a description?",
        url: "route to the page",
      },
      {
        title: "MORE PLANTS",
        image: "require (an image from the DB)",
        description: "maybe a description?",
        url: "route to the page",
      },
      {
        title: "EXTRA",
        image: "require (an image from the DB)",
        description: "maybe a description?",
        url: "route to the page",
      },
]




const Home = () => {

    const [searchedPlants, setSearchedPlants] = useState([])
    const handleSearchTrefleAPI = async (token: any, query: any) => {

    
        try {
            const response = await searchTrefleAPI(token, query)
            if (!response.ok) {
                throw new Error('something went wrong!')
            }
            const items = await response.json();
            const plantData = items.data.map((plant: any) => ({
                plantName: plant.common_name,
                plantImage: plant.default_image.small_url,
                plantId: plant.id,
            }));
            console.log(plantData)
            setSearchedPlants(plantData)
        } catch (err) {
            console.error(err)
        }
    }
    
    return (
        <>
        <div>

            <div className="search-cont">
            <input className="search" placeholder="Search for a plant"/>
            </div>
            <div className="tile-container">
            {homeTiles.map((tile) => {
                return (
                  <div>
                    <Tile
                      title={tile.title}
                      image={tile.image}
                      description={tile.description}
                      url={tile.url}
                    ></Tile>
                  </div>
            )
        })}
        </div>
        </div>


            <div>
            <button onClick={() => {handleSearchTrefleAPI(`sk-k5vt646417c428ab7960`, `pothos`)}}>CLick</button>
 
            {/* <div>{searchedPlants}</div> */}
            {searchedPlants.map((plant: any) => {
                return (
                    <>
                    <div>{plant.plantName}</div>
                    <img src={plant.plantImage} alt="plant" key={plant.plantId}></img>
                    </>
                );
            })}
            </div>
        
        </>
    )
}

export default Home

