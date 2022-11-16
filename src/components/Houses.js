import React from "react";
import House from "./House";

function Houses({allHouses}) {


  return (
    <div id='house-collection'>
      {allHouses.map((house) => (
        <House
          key={house.id}
          house={house}
        />
      ))}
    </div>
  )
}

export default Houses;
