import React from "react";
import Tile from "./Tile";

const homeTiles = [
    {
        title: "put a title here",
        image: "require (an image from the DB)",
        description: "maybe a description?",
        url: "route to the page",
      },
      {
        title: "put a title here",
        image: "require (an image from the DB)",
        description: "maybe a description?",
        url: "route to the page",
      },
]

export default function Home() {
    return (
        <div>
            <input className="search" placeholder="Search for a plant"/>
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
    )
}
