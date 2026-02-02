import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Pizza from "./pages/Pizza"
import Biryani from "./pages/Biryani"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/pizza" element={<Pizza />} />
      <Route path="/biryani" element={<Biryani />} />
    </Routes>
  )
}

export default App
