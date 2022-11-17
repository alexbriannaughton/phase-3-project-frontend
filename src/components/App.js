import React, { useState, useEffect } from "react";
import Houses from './Houses'
import AddHouse from './AddHouse'
import HouseView from './HouseView'
import AddReview from './AddReview'
import NavBar from './NavBar'
import Login from './Login'
import { Route, Routes } from "react-router-dom"

function App() {

  const [allHouses, setAllHouses] = useState([]);
  const [currentUser, setCurrentUser] = useState("no one")

  useEffect(() => {
    fetch("http://localhost:9292/houses")
      .then((res) => res.json())
      .then((data) => setAllHouses(data));
  }, []);

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route
          path="/houses"
          element={<Houses allHouses={allHouses} />}
        />
        <Route
          path='/add-house'
          element={<AddHouse />}
        />
        <Route
          path='/houses'
          element={<HouseView
            currentUser={currentUser}
            />}
        />
        <Route
          path='/add-review'
          element={<AddReview />}
        />
        <Route
          path={`/houses/:houseId`}
          element={<HouseView currentUser={currentUser} allHouses={allHouses} />}
        >
        </Route>
        <Route
          path="/login"
          element={<Login 
            setCurrentUser={setCurrentUser}
            />}
        >
        </Route>

      </Routes>
    </div>
  );
}

export default App;
