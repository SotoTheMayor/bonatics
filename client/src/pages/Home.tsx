import React, { useState, useEffect, useContext } from "react";
import { searchPerenualAPI } from "../utils/PerenualAPI";
import { useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USERS } from "../utils/queries";
import { ADD_TRADE, ADD_WISH } from '../utils/mutations';
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

import hero from "../images/homepage_image.jpg";

const Home = () => {

    const [searchedPlants, setSearchedPlants] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const { loading, data } = useQuery(QUERY_ME);

    function search(plant: any, array: any) {
        for (let i=0; i < array.length; i++ ) {
            if (array[i].plantId === plant) {
                console.log(array[i].plantId + ' = ' + plant)
                console.log("++++plant already on your list+++")
                return false
            }
        } return true
    }

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

    const [addTrade, { error: tradeError }] = useMutation(ADD_TRADE)
    const handleTradeInput = async (plant: any) => {
        console.log(plant)
        const tradeArray = data.me.trade
        if (search(plant.plantId, tradeArray)) {
            
        // if(data.me.trade.includes(plant.plantId)) {
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
        catch (err) { console.log(err) }
    } else {console.log('plant already on your list!')}
    };

    const [addWish, { error: wishError }] = useMutation(ADD_WISH)
    const handleWishInput = async (plant: any) => {
        console.log(plant)
        const tradeArray = data.me.trade
        if (search(plant.plantId, tradeArray)) {

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
        catch (err) { console.log(err) }
    } else {console.log('plant already on your list!'); return}

    };



    const handleInputChange = (event: any) => {
      const value = event.target.value;
      setSearchInput(value);

        if (value == "") {
            setSubmitted(false);
        }

    }



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
                            onChange={handleInputChange}
                        />

                        <Button onClick={() => setSubmitted(true)} type='submit' variant='success' className="search-button">


                            Submit Search
                        </Button>
                    </Form>

                </div>



                {!submitted && <> <div className="hero">
                    <div className="hero-text">Find and Trade Your Perfect Plant</div>
                    <img className={`lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center hero-img
              `} alt="hero" src={hero} />
                </div></>}




                {submitted && <> <div className="tile-container">
                    {searchedPlants.slice(0, 12).map((plant: any) => {
                        return (
                            <Tile
                                key={plant.plantId}
                                title={plant.plantName}
                                image={plant.plantImage}
                                // description={tile.description}
                                // url={tile.url}
                                description='Description'
                                callbackTrade={() => handleTradeInput(plant)}
                                callbackWish={() => handleWishInput(plant)}
                            ></Tile>
                        )
                    })}
                </div> </>}
            </div>
        </>
    )
}

export default Home

