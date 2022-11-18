import React, { useState } from "react";

function AddReview({ currentUser, onAddReview, currentHouse, setShowForm }) {
  const [user_id, setUser_Id] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleXClick() {
    setShowForm(false);
  }

  function setSantas(rating) {
    if (rating === 0) {
      return "0";
    } else if (rating === 1) {
      return "🎅";
    } else if (rating === 2) {
      return "🎅🎅";
    } else if (rating === 3) {
      return "🎅🎅🎅";
    } else if (rating === 4) {
      return "🎅🎅🎅🎅";
    } else if (rating === 5) {
      return "🎅🎅🎅🎅🎅";
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    setShowForm(false);

    const newReview = {
      text: text,
      rating: setSantas(rating),
      user_id: currentUser.id,
      house_id: currentHouse.id,
    };

    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((resp) => resp.json())
      .then((data) => onAddReview(data));

    setUser_Id("");
    setText("");
    setRating("");
  }

  return (
    <div className="form-div">
      <h1>
        Add your review of this house!
        <button id="x-button" onClick={handleXClick}>
          x
        </button>
      </h1>

      <form onSubmit={submitHandler}>
        {/* <label>User ID</label><br></br>
                <input
                    type="text"
                    name="user_id"
                    label="user_id"
                    value={user_id}
                    onChange={(e) => setUser_Id(e.target.value)}
                /><br></br> */}
        <label>Review</label>
        <br></br>
        <textarea
          className="big-input"
          type="text"
          rows="3"
          name="text"
          label="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br></br>
        {/* <label>Santas</label><br></br>
                <input
                    type="text"
                    name="rating"
                    label="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                /><br></br><br></br> */}
        <label>Santa Rating:</label>
        <br></br>
        <div className="rating">
          {[...Array(5)].map((santa, index) => {
            index += 1;
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
            );
          })}
        </div>

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default AddReview;
