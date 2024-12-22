import "./styles/App.css";
import React from "react";
import Header from "./Components/Header";
// import UnderConstruction from "./Components/UnderConstruction";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Components/Main";


function App() {
  return (
    <div className="bg">
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
      </Router>
    </div>
      
  );
}

export default App;
