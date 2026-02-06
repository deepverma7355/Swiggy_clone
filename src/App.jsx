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
import Kebab from "./pages/Kebab"
import Chai from "./pages/Chai"
import Poori from "./pages/Poori"
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
      <Route path="/kebab" element={<Kebab />} /> 
      <Route path="/chai" element={<Chai />} />
      <Route path="/poori" element={<Poori />} />
    </Routes>
  )
}

export default App
