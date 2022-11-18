import React from "react";

function NotLoggedIn({setShowWarning}) {
    function handleXClick(){
        setShowWarning(false)
    }
    return(
        <div className="form-div">
            <br></br>
            <h1>you need to log in!<button id='x-button' onClick={handleXClick}>x</button></h1>
            <br></br><br></br>
        </div>
    )
}

export default NotLoggedIn