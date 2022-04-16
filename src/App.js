import logo from "./logo.svg";
import "./App.css";

import { Link, Routes, Route } from "react-router-dom";
import DisplayCity from "./components/displayCity";
import AddCity from "./components/addCity";
import AddCountry from "./components/addCountry";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/add-city">AddCIty</Link>
      <Link to="/add-country">AddCountry</Link>
      <Routes>
        <Route path="/" element={<DisplayCity />}></Route>
        <Route path="/add-city" element={<AddCity />}></Route>
        <Route path="/add-country" element={<AddCountry />}></Route>
      </Routes>
    </div>
  );
}

export default App;
