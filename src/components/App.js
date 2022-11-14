import React from 'react';
import Houses from './Houses'
import AddHouse from './AddHouse'
import HouseView from './HouseView'
import AddReview from './AddReview'
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="App">
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