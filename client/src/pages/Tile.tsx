import React from "react";
interface cardProps {
title: string,
image: string,
description: string,
url: string
}
const Tile = (props: cardProps) => {
  return (
      <div className="tile-cont">
        <div className="tile">
          <div className="tile-title">{props.title}</div>
          <img src={props.image} className="tile-image" />
          <a href={props.url} className="tile-url">
            {/* <button className="site-but">More Info</button> */}
          </a>
          {/* <div className="tile-desc">{props.description}</div> */}
        </div>
      </div>
  );
};

export default Tile;