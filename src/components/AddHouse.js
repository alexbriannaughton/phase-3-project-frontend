import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

function AddHouse ({addHouse, house_id}) {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [image_link, setImage_Link] = useState("")

    const navigate = useNavigate()

    function submitHandler(e) {
        e.preventDefault()

        const newHouse = {
            name: name,
            location: location,
            image_link: image_link 
        }

        console.log(newHouse)

        fetch("http://localhost:9292/houses", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newHouse)
        })
        .then(resp => resp.json())
        .then(data => navigate(`/houses/${data.id}`))
        

        setName("")
        setLocation("")
        setImage_Link("")
    }

    return (
        <>
        <h1>Add your House!</h1>
        <form onSubmit={submitHandler}>
            <label>Name</label><br></br>
            <input
                type="text"
                name="name"
                label="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br></br>
            <label>Location</label><br></br>
            <textarea
                className="big-input"
                type="text"
                name="location"
                label="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            ></textarea><br></br>
            <label>Image URL</label> <br></br>
            <input
                type="text"
                name="image_link"
                label="image_link"
                value={image_link}
                onChange={(e) => setImage_Link(e.target.value)}
            /><br></br><br></br>
            <button type="submit">Submit House</button>
        </form>
        </>
  
    )
    }

export default AddHouse
