import React from "react";
import { Link } from "react-router-dom"
// import { Card } from "semantic-ui-react";

function House({ id, name, image_link, location, house }) {

  return (
    <Link to={`/houses/${house.id}`}>
      <div className="house-card">
        <div className="content">
          <div className="header">{house.name}</div>
        </div>
        <img className="house-image" src={house.image_link} alt={name} />
        <div className="location"> {house.location} </div>
      </div>
    </Link>
  );
}


export default House;
