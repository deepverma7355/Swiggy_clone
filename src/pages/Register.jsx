import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import api from "../api/axios" 

const Register = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false) 

  const handleRegister = async () => {
    setError("")
    
    if (!email || !password || !confirmPassword) {
      setError("All fields are required")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setLoading(true)

    try {
      const res = await api.post("/auth/register", {
        email,
        password,
      })

      console.log("REGISTER SUCCESS:", res.data)

      // Redirect to login page
      navigate("/login")

    } catch (err) {
      console.log("REGISTER ERROR:", err)

      setError(
        err.response?.data?.message ||
        "Server error. Please try again."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-orange-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl w-[360px] shadow-xl">

        <h2 className="text-2xl font-bold text-center mb-1">
          Create Account
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Join Swiggy today
        </p>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
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
          className="w-full border px-4 py-2 rounded-lg mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className="w-full border px-4 py-2 rounded-lg mb-2"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold disabled:opacity-60"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-500 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Register
