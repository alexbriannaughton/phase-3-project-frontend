import React, { useEffect, useState } from "react";
import House from "./House";
import { Card } from "semantic-ui-react";

//Get houses from backend into a stateful array(fetch request)
//Map between this component and its child to render each individual house

function Houses() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/houses")
      .then((res) => res.json())
      .then((data) => setAllHouses(data));
  }, []);
console.log(allHouses)
//   const houseArray = allHouses.map((house) => {
//     return <House key={house.id} {...house} />;
//   });
// }
  return(
  <Card.Group itemsPerRow={6}>
    {allHouses.map((house)=>(
       <House key={house.id}{...house}/>
    ))}
  </Card.Group>
  )
}

export default Houses;
