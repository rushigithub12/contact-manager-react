import React, { useState, useEffect } from "react";
import "./App.css";
import Create from "./components/create/Create";
import Read from "./components/read/Read";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Update from "./components/update/Update";
import Delete from "./components/delete/Delete";

function App() {
  return (
    <Router>
      <div className="main">
        <h1>React crud operations</h1>
        <div>
          <Routes>
            <Route exact path="/" element={<Create />} />
          </Routes>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Routes>
            <Route exact path="/read" element={<Read />} />
          </Routes>
        </div>
        <Routes>
          <Route exact path="/update" element={<Update />} />
        </Routes>
        <Routes>
          <Route exact path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
