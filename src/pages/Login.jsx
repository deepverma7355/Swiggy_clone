import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    // later you will add auth here
    navigate("/")   // 🔥 GO TO HOME
  }

  return (
    <div className="min-h-screen bg-orange-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl w-[350px] shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 rounded-lg mb-6"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 text-white py-2 rounded-lg mb-3 font-semibold"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/")}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default Login
