import React from "react";
interface cardProps {
title: string,
image: string,
description: string,
callback: any,
}
const Tile = (props: cardProps) => {
  return (
      <div className="tile-cont">
          <div onClick={props.callback} className="tile-url">
        <div className="tile">
          <div className="tile-title">{props.title}</div>
          <img src={props.image} className="tile-image" />
            {/* <button className="site-but">More Info</button> */}
          </div>
          {/* <div className="tile-desc">{props.description}</div> */}
        </div>
      </div>
  );
};

export default Tile;