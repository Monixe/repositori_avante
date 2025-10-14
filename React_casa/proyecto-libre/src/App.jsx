import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import Sobremi from "./pages/Sobremi";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/sobre-mi" element={<Sobremi />} />
      </Route>
    </Routes>
  );
}

export default App;