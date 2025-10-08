import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Proyectos.jsx" element={<Proyectos />} />
    </Routes>

  );
}
export default App;
