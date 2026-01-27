import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter email and password")
      return
    }

    // later real authentication will come here
    navigate("/") // go to home
  }

  return (
    <div className="min-h-screen bg-orange-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl w-[360px] shadow-xl">
        
        <h2 className="text-2xl font-bold mb-1 text-center">Login</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Welcome back to Swiggy
        </p>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-sm text-orange-500 cursor-pointer"
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        {/* Login button */}
        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Login
        </button>

        {/* Signup link */}
        <p className="text-sm text-center mt-4">
          New to Swiggy?{" "}
          <Link
            to="/register"
            className="text-orange-500 font-semibold hover:underline"
          >
            Create an account
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Login
