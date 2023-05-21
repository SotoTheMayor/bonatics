import React, { useState, useEffect, useContext } from "react";
import { searchPerenualAPI } from "../utils/PerenualAPI";
import {ADD_TRADE, ADD_WISH} from '../utils/mutations';
import { useMutation } from '@apollo/client';
import Tile from "./Tile";
import { LoginContext } from '../App'
import {
    Container,
    Col,
    Form,
    Button,
    Card,
    Row
} from 'react-bootstrap';

const Home = () => {

    const loggedIn = useContext(LoginContext);
    const [searchedPlants, setSearchedPlants] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        console.log(loggedIn)
    })
    
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

    const [addTrade, {error: tradeError}] = useMutation(ADD_TRADE)
    const handleTradeInput = async (plant: any) => {
        console.log(plant)
        try {
        await addTrade({
            variables: {
                tradeData: {
                    plantId: plant.plantId,
                    plantImage: plant.plantImage,
                    plantName: plant.plantName,
                }
            },
        });
         }
        catch (err) { console.log(err)}
    };

    const [addWish, {error: wishError}] = useMutation(ADD_WISH)
    const handleWishInput = async (plant: any) => {
        console.log(plant)
        try {
        await addWish({
            variables: {
                wishData: {
                    plantId: plant.plantId,
                    plantImage: plant.plantImage,
                    plantName: plant.plantName,
                }
            },
        });
        }
        catch (err) { console.log(err)}
    };

    return (
        <>
            <div>
              <div className="search-cont">
                <Form onSubmit={handleFormSubmit}>
                    <Form.Control
                        name='searchinput'
                        className='search'
                        value={searchInput}
                        // size='lg'
                        type='text'
                        placeholder="Search for a plant"
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <Button type='submit' variant='success' className="search-button">
                        Submit Search
                    </Button>
                </Form>
                </div>

                <div className="tile-container">
                    {searchedPlants.slice(0,12).map((plant: any) => {
                        return (
                                <Tile
                                    key={plant.plantId}
                                    title={plant.plantName}
                                    image={plant.plantImage}
                                    // description={tile.description}
                                    // url={tile.url}
                                    description='Description'
                                    callbackTrade={() => handleTradeInput(plant)}
                                    callbackWish={() => handleWishInput(plant)} //need to make wish funtion
                                ></Tile>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home

