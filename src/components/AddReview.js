import React, { useState } from 'react'

function AddReview({ onAddReview, currentHouse, setShowForm }) {
    const [user_id, setUser_Id] = useState("")
    const [text, setText] = useState("")
    const [rating, setRating] = useState("")

    function handleXClick() {
        setShowForm(false)
    }

    function submitHandler(e) {
        e.preventDefault()
        setShowForm(false)

        const newReview = {
            text: text,
            rating: rating,
            user_id: user_id,
            house_id: currentHouse.id
        }

        console.log(newReview)

        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
            .then(resp => resp.json())
            .then(data => onAddReview(data))

        setUser_Id("")
        setText("")
        setRating("")
    }

    return (
        <div className='form-div'>
            <h1>Add your review of this house!<button id='x-button' onClick={handleXClick}>x</button></h1>
            
            <form onSubmit={submitHandler}>
                <label>User ID</label><br></br>
                <input
                    type="text"
                    name="user_id"
                    label="user_id"
                    value={user_id}
                    onChange={(e) => setUser_Id(e.target.value)}
                /><br></br>
                <label>Review</label><br></br>
                <textarea
                    className="big-input"
                    type="text"
                    rows="3"
                    name="text"
                    label="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea><br></br>
                <label>Santas</label><br></br>
                <input
                    type="text"
                    name="rating"
                    label="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                /><br></br><br></br>
                <button type="submit">Submit Review</button>
            </form>
        </div>

    )
}

export default AddReview
