import React from 'react';
import Homepage from './Homepage'
import CreateWheel from './CreateWheel'
import ChoreWheel from './ChoreWheel'
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path='/create-the-wheel'
          element={<CreateWheel />}
        />
        <Route
          path='/chore-wheel'
          element={<ChoreWheel />}
        />

      </Routes>
    </div>
  );
}

export default App;