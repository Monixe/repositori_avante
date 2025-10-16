

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import './App.css'



function App() {
  return (
    <div id="appDiv">
      <Routes>
     <Route path="/" element={<Home />} />
     </Routes>
    </div>
  );
}

export default App
