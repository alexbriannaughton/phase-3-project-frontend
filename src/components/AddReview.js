import React, {useState} from 'react'

function AddReview ({addReviewer, house_id}) {
    const [user_id, setUser_Id] = useState("")
    const [text, setText] = useState("")
    const [rating, setRating] = useState("")

    function submitHandler(e) {
        e.preventDefault()

        const newReview = {
            text: text,
            rating: rating,
            user_id: user_id,
            //house_id: house_id
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
        .then(data => console.log(data))

        setUser_Id("")
        setText("")
        setRating("")
    }

    return (
        <>
        <h1>Add your review of this house!</h1>
        <form onSubmit={submitHandler}>
            <label>User ID</label>
            <input
                type="text"
                name="user_id"
                label="user_id"
                value={user_id}
                onChange={(e) => setUser_Id(e.target.value)}
            />
            <label>Review</label>
            <textarea
                className="big-input"
                type="text"
                rows="3"
                name="text"
                label="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <label>Santas</label> 
            <input
                type="text"
                name="rating"
                label="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />
            <button type="submit">Submit Review</button>
        </form>
        </>
  
    )
    }

export default AddReview
