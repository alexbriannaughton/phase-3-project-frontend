import React, { useEffect, useState } from "react";
import Houses from './Houses'
import AddHouse from './AddHouse'
import HouseView from './HouseView'
import AddReview from './AddReview'
import NavBar from './NavBar'
import { Route, Routes } from "react-router-dom"

function App() {
//   const [house, setHouse] = useState('')

//   useEffect(()=>{
//       fetch('http://localhost:9292/houses')
//       .then((res)=>res.json())
//       .then((data)=> setHouse(data))
//     },[])
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route
          path="/"
          element={<Houses />}
        />
        <Route
          path='/add-house'
          element={<AddHouse />}
        />
        <Route
          path='/house'
          element={<HouseView />}
        />
        <Route
          path='/add-review'
          element={<AddReview />}
        />

      </Routes>
    </div>
  );
}

export default App;
