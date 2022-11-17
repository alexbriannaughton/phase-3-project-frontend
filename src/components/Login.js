import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Login({setCurrentUser}) {
    const [userLogin, setUserLogin] = useState("")

    const navigate = useNavigate()

    function handleChange(e) {
        setUserLogin(e.target.value)
    }

    function handleLoginSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/users/${userLogin}`)
        .then((res) => res.json())
        .then((data) => setCurrentUser(data))
        .catch(error => {alert(error)})
        navigate('/houses')
    }

    return (
        <div>
            <form onSubmit={handleLoginSubmit}>
                <label htmlFor="login" value="Username">Username:   </label><br />
                <input type="text" name="login" value={userLogin} onChange={handleChange} autoFocus={true} />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default Login