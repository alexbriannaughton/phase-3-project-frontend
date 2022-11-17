import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function HouseView({ allHouses }) {
    const params = useParams()
    const [currentHouse, setCurrentHouse] = useState({})

    useEffect(() => {
        fetch(`http://localhost:9292/houses/${params.houseId}`)
            .then((res) => res.json())
            .then((data) => setCurrentHouse(data));
    }, []);

    console.log(currentHouse.reviews)

    function renderHouseView() {
        if (currentHouse.reviews) {
            return (
                <div>
                    <h1>{currentHouse.name}</h1>
                    <img id='houseview-image' src={currentHouse.image_link}></img>
                    <h3>{currentHouse.location}</h3>
                    <h3>{currentHouse.reviews ==! [] ? 'No reviews yet!' : 'Reviews:'}</h3>
                    {currentHouse.reviews && currentHouse.reviews.map((review) => (
                        <p>{`${review.user.name} says "${review.text}"`}</p>
                    ))}
                </div>
            )
        }
    }

    return (
        <>
            {renderHouseView()}
        </>
    )
}



export default HouseView

