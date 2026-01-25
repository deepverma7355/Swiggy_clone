const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-500">
      <div className="bg-white p-8 rounded-2xl w-96 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border px-4 py-2 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-4 py-2 rounded-lg mb-4"
        />

        <button className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold">
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
