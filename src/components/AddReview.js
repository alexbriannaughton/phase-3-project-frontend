import React, {useState} from 'react'

function AddReview ({addReviewer, house_id}) {
    const [author, authorChanger] = useState("")
    const [body, bodyChanger] = useState("")
    const [stars, starsChanger] = useState("")

    function submitHandler(e) {
        e.preventDefault()

        const newReview = {
            author: author,
            body: body,
            stars: stars,
            house_id: house_id
        }

        fetch("http://localhost:3000/add-review", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
        .then(resp => resp.json())
        .then(data => addReviewer(data))

        authorChanger("")
        bodyChanger("")
        starsChanger("")
    }

    return (
        <>
        <h1>Add your review of this house!</h1>
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <input
                type="text"
                name="author"
                label="author"
                value={author}
                onChange={(e) => authorChanger(e.target.value)}
            />
            <label>Review</label>
            <textarea
                className="big-input"
                type="text"
                rows="3"
                name="body"
                label="body"
                value={body}
                onChange={(e) => bodyChanger(e.target.value)}
            ></textarea>
            <label>Santas</label> 
            <input
                type="text"
                name="santas"
                label="santas"
                value={stars}
                onChange={(e) => starsChanger(e.target.value)}
            />
            <button type="submit">Submit Review</button>
        </form>
        </>
  
    )
    }

export default AddReview
