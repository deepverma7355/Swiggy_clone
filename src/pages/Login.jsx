import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import api from "../api/axios"

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false) // 👈 added

  const handleLogin = async () => {
    setError("")
    setLoading(true)

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      })

      console.log("LOGIN SUCCESS:", res.data)
      navigate("/")
    } catch (err) {
      console.log("LOGIN ERROR:", err.response)
      setError(err.response?.data?.message || "Server error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-orange-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl w-[360px] shadow-xl">

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full border px-4 py-2 rounded-lg mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="mr-2"
          />
          <label htmlFor="showPassword" className="text-sm text-gray-600">
            Show password
          </label>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-orange-500 font-semibold">
            Register
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login
