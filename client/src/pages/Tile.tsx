import React from "react";
import Auth from "../utils/auth";
interface cardProps {
title: string,
image: string,
description: string,
callbackTrade: any,
callbackWish: any
}
const Tile = (props: cardProps) => {
  return (
      <div className="tile-cont">
          {/* <div onClick={props.callback} className="tile-url"> */}
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
      // </div>
  );
};

export default Tile;