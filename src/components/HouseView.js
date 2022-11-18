import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import AddReview from "./AddReview";
import NotLoggedIn from "./NotLoggedIn";
import EditForm from "./EditForm"

function HouseView({ currentUser }) {
    const params = useParams()
    const [currentHouse, setCurrentHouse] = useState({})
    const [showForm, setShowForm] = useState(false)
    const [showWarning, setShowWarning] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)
    const [currentReview, setCurrentReview] = useState({})

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
        if (currentUser === "no one") {
            setShowWarning(true)
        } else {
            setShowForm((showForm) => !showForm)
        }
    }


    function handleDelete(review) {
        fetch(`http://localhost:9292/reviews/${review.id}`, { method: 'DELETE' })
            .then((res) => res.json())
            .then((data) => handleAddReview())
    }

    function handleEdit(review) {
        setShowEditForm(true)
        setCurrentReview(review)
    }

    function renderHouseView() {
        if (currentHouse.reviews) {
            return (
                <div>
                    <h1>{currentHouse.name}</h1>
                    <img alt={currentHouse.name} id='houseview-image' src={currentHouse.image_link}></img>
                    <h2>{currentHouse.location}</h2>
                    <h3>{currentHouse.reviews == ![] ? 'No reviews yet!' : 'Reviews:'}</h3>
                    {currentHouse.reviews && currentHouse.reviews.map((review) => (
                        <>
                            <p className="review-line-one">{`${review.user.name}: ${review.rating} `}</p>
                            <p>
                                {currentUser.id === review.user.id ? <button onClick={e => handleDelete(review)}>delete</button> : null}
                                {currentUser.id === review.user.id ? <button onClick={e => handleEdit(review)}>edit</button> : null}
                                {` "${review.text}"`}
                            </p>
                        </>
                    ))}
                    <button onClick={handleClick}>leave a review</button>
                    {showWarning ? <NotLoggedIn setShowWarning={setShowWarning}/> : null}
                    {showForm ? <AddReview currentUser={currentUser} setShowForm={setShowForm} onAddReview={handleAddReview} currentHouse={currentHouse} /> : null}
                    {showEditForm ? <EditForm handleAddReview={handleAddReview} setShowEditForm={setShowEditForm} currentReview={currentReview}/> : null}
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
