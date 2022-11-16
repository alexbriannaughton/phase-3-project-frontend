import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function House({id,name,image_link,location}){

//  function handleClick(e){


    return (
        <Card>
          <div>
          <div className="content">
          <div className="header">{name}</div>
        </div>
            <div className="image">
              <img src={image_link} alt={name} />
            </div>
            <div className="location"> {location} </div>
            </div>
        </Card>
      );
}


export default House;
