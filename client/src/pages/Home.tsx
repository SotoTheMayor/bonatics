import React, { useState, useEffect } from "react";
import { searchPerenualAPI } from "../utils/PerenualAPI";
import {ADD_TRADE} from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Tile from "./Tile";
import {
    Container,
    Col,
    Form,
    Button,
    Card,
    Row
} from 'react-bootstrap';

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
    const [searchInput, setSearchInput] = useState('');
    
    const handleFormSubmit = async (event: any) => {
        event.preventDefault();
        if (!searchInput) {
            return false;
        }

        try {
            const token = `sk-k5vt646417c428ab7960`;
            const response = await searchPerenualAPI(token, searchInput)
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

    const [addTrade, {error}] = useMutation(ADD_TRADE)
    const handleTradeInput = async (plant: any) => {
        // event.preventDefault();
        try {
        await addTrade({
            variables: {
                tradeData: {
                    plantId: plant.plantId,
                    plantImage: plant.plantImage,
                    plantName: plant.plantName,
                }
            }
        });
         }
        catch (err) { console.log(err)}
        // const tradeToSave = searchedPlants.find((plant: any) => plant.plantId === plantId:)
        // const token = Auth.loggedIn() ? Auth.getToken() : null;
        // if (!token) {
        //     return false;
        // }
        // try {
        //     const { data } = await saveTrade ({
        //         variables: { plantData: {...tradeToSave}},
        //     });
        // }catch (err) {
        //     console.error(err);
        // }

    
};

    return (
        <>
            <div>
                <Form onSubmit={handleFormSubmit}>
                    <Form.Control
                        name='searchinput'
                        className='search-cont'
                        value={searchInput}
                        size='lg'
                        type='text'
                        placeholder="Search for a plant"
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <Button type='submit' variant='success' size='lg'>
                        Submit Search
                    </Button>
                </Form>

                <div className="tile-container">
                    {searchedPlants.slice(0,12).map((plant: any) => {
                        return (
                            <div>
                                <Tile
                                    key={plant.plantId}
                                    title={plant.plantName}
                                    image={plant.plantImage}
                                    // description={tile.description}
                                    // url={tile.url}
                                    description='Description'
                                    callback={() => handleTradeInput(plant)}
                                ></Tile>
                            </div>
                        )
                    })}
                </div>
            </div>


            {/* <div>
                {searchedPlants.map((plant: any) => {
                    return (
                        <>
                            <div>{plant.plantName}</div>
                            <img src={plant.plantImage} alt="plant" key={plant.plantId}></img>
                        </>
                    );
                })}
            </div> */}

        </>
    )
}

export default Home

