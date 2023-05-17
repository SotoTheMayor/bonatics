import React from "react";
import Tile from "./Tile";

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

export default function Home() {
    return (
        <div>
            <div className="search-cont">
            <input className="search" placeholder="Search for a plant"/>
            </div>
            <div className="tile-container">
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
        </div>
    )
}
