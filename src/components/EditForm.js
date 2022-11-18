import React, { useState } from "react";

function EditForm({ currentReview, setShowEditForm, handleAddReview }) {


    const [text, setText] = useState(currentReview.text)
    const [rating, setRating] = useState(setSantas(currentReview.rating))
    const [hover, setHover] = useState(0);

    function handleXClick() {
        setShowEditForm(false)
    }

    function setSantasToEmoji(rating) {
        if (rating === 0) {
            return "0"
        }
        else if (rating === 1) {
            return "🎅"
        }
        else if (rating === 2) {
            return "🎅🎅"
        }
        else if (rating === 3) {
            return "🎅🎅🎅"
        }
        else if (rating === 4) {
            return "🎅🎅🎅🎅"
        }
        else if (rating === 5) {
            return "🎅🎅🎅🎅🎅"
        }
    }

    function setSantas(rating) {
        if (rating === 0) {
            return "0"
        }
        else if (rating === "🎅") {
            return 1
        }
        else if (rating === "🎅🎅") {
            return 2
        }
        else if (rating === "🎅🎅🎅") {
            return 3
        }
        else if (rating === "🎅🎅🎅🎅") {
            return 4
        }
        else if (rating === "🎅🎅🎅🎅🎅") {
            return 5
        }
    }

    function handleEdit(e) {
        e.preventDefault()
        setShowEditForm(false)

        const updatedReview = {
            text: text,
            rating: setSantasToEmoji(rating)
        }

        fetch(`http://localhost:9292/reviews/${currentReview.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedReview)
        })
            .then((res) => res.json())
            .then((data) => handleAddReview())
    }


return (
    <div className="form-div">
        <h1>Edit your review:<button id='x-button' onClick={handleXClick}>x</button></h1>
        <form onSubmit={handleEdit}>
            <textarea
                className="big-input"
                type="text"
                rows="3"
                name="text"
                label="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            >
            </textarea><br></br>
            <label>Santa Rating:</label><br></br>
            <div className='rating'>
                {[...Array(5)].map((santa, index) => {
                    index += 1
                    return (
                        <button
                            id="santa-button"
                            type="button"
                            key={index}
                            className={index <= (rating || hover) ? "on" : "off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="santa">🎅</span>
                        </button>
                    )
                })}
            </div>


            <button type="submit">Submit Review</button>
        </form>
    </div>
)
}

export default EditForm