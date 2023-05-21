import React from "react";
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
          <div onClick={props.callback} className="tile-url">
        <div className="tile">
          <div className="tile-title">{props.title}</div>
          <img src={props.image} className="tile-image" alt={props.title} />
          <div onClick={props.callbackTrade} className="tile-url">
            <button className="site-but">Add Trade</button>
          </div>
          <div onClick={props.callbackWish} className="tile-url">
            <button className="site-but">Add Wish</button>

          </div>
          {/* <div className="tile-desc">{props.description}</div> */}
        </div>
      </div>
  );
};

export default Tile;