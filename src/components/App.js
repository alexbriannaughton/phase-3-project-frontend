import React, { useState, useEffect } from "react";
import Houses from './Houses'
import AddHouse from './AddHouse'
import HouseView from './HouseView'
import AddReview from './AddReview'
import NavBar from './NavBar'
import { Route, Routes, useRouteMatch } from "react-router-dom"

function App() {

  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/houses")
      .then((res) => res.json())
      .then((data) => setAllHouses(data));
  }, []);

  return (
    <div className="App">
      <NavBar/>
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
          element={<HouseView />}
        />
        <Route
          path='/add-review'
          element={<AddReview />}
        />
        <Route
          path={`/houses/:houseId`}
          element={<HouseView allHouses={allHouses} />}
        >
        </Route>

      </Routes>
    </div>
  );
}

export default App;
