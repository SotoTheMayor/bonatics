import React from "react";
import { Link } from "react-router-dom";
interface tradelistProps {
    plantName: any,
    user: any,
}

//render for contact info of associated "for trade" users in the Plant Your Garden/Wish Trade profile section
const WishTrade = (props: tradelistProps) => {
    const email = props.user.email
    console.log(props.user.trade);
    
    return (
        <div className="wl-container">

        <span className="wl-item">{props.user.userName} has your {props.plantName}! </span>
        <div>
        <a  className='wl-button' href={`mailto:${email}`}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg></a>
        </div>
        </div>
        
    );
};

export default WishTrade


