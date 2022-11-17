import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import AddReview from "./AddReview";

function HouseView() {
    const params = useParams()
    const [currentHouse, setCurrentHouse] = useState({})
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:9292/houses/${params.houseId}`)
            .then((res) => res.json())
            .then((data) => setCurrentHouse(data));
    }, []);

    function handleAddReview() {
        fetch(`http://localhost:9292/houses/${params.houseId}`)
            .then((res) => res.json())
            .then((data) => setCurrentHouse(data));
    }

    function handleClick() {
        setShowForm((showForm) => !showForm);
    }


    function handleDelete(review){
         console.log(review)
        fetch(`http://localhost:9292/reviews/${review.id}`, { method: 'DELETE' })
        .then((res)=>res.json())
        .then((data) => handleAddReview())
    }

    function renderHouseView() {
        if (currentHouse.reviews) {
            return (
                <div>
                    <h1>{currentHouse.name}</h1>
                    <img id='houseview-image' src={currentHouse.image_link}></img>
                    <h2>{currentHouse.location}</h2>
                    <h3>{currentHouse.reviews == ![] ? 'No reviews yet!' : 'Reviews:'}</h3>
                    {currentHouse.reviews && currentHouse.reviews.map((review) => (
                        <>
                            <p className="review-line-one">{`${review.user.name}: ${review.rating} `}</p>
                            <p>
                            <button onClick={e=>handleDelete(review)}>delete</button>
                            {`"${review.text}"`}</p>


                        </>
                    ))}
                    <button onClick={handleClick}>leave a review</button>

                    {showForm ? <AddReview setShowForm={setShowForm} onAddReview={handleAddReview} currentHouse={currentHouse} /> : null}
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
