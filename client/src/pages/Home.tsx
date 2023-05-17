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
        
        </>
    )
}

export default Home

