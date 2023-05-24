import React from "react";
import Auth from "../utils/auth";
import logo from '../images/logo-no-bg.png'
interface cardProps {
title: string,
image: string,
description: string,
callbackTrade: any,
callbackWish: any
}

//display tiles for the plants returned from the API call
const Tile = (props: cardProps) => {
  return (
      <div className="tile-cont">
        <div className="tile">
          <div className="tile-title">{props.title}</div>
          <img src={props.image} className="tile-image" alt={props.title} />
          {Auth.loggedIn() ? (
          <div className="button-spacer">
          <div onClick={props.callbackTrade} className="tile-url-1">
            <button className="site-but">Add Trade</button>
          </div>
          <div onClick={props.callbackWish} className="tile-url-2">
            <button className="site-but">Add Wish</button>
            </div>
          </div>
          ) : (<></>)}
          </div>
        </div>
  );
};

export default Tile;