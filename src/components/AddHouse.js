import React, {useState} from 'react'

function AddHouse ({addHouse, house_id}) {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [image_link, setImage_Link] = useState("")

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
        .then(data => console.log(data))

        setName("")
        setLocation("")
        setImage_Link("")
    }

    return (
        <>
        <h1>Add your House!</h1>
        <form onSubmit={submitHandler}>
            <label>Name</label>
            <input
                type="text"
                name="name"
                label="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label>Location</label>
            <textarea
                className="big-input"
                type="text"
                rows="3"
                name="location"
                label="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            ></textarea>
            <label>Image URL</label> 
            <input
                type="text"
                name="image_link"
                label="image_link"
                value={image_link}
                onChange={(e) => setImage_Link(e.target.value)}
            />
            <button type="submit">Submit House</button>
        </form>
        </>
  
    )
    }

export default AddHouse
