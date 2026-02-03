import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Pizza from "./pages/Pizza"
import Biryani from "./pages/Biryani"
import Burger from "./pages/Burger"
import Cake from "./pages/Cake"
import Roll from "./pages/Roll"
import Noodels from "./pages/Noodles"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/pizza" element={<Pizza />} />
      <Route path="/biryani" element={<Biryani />} />
      <Route path="/burger" element={<Burger />} />
      <Route path="/cake" element={<Cake />} />
      <Route path="/rolls" element={<Roll />} />
      <Route path="/noodles" element={<Noodels />} />
    </Routes>
  )
}

export default App
