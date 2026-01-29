const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

// REGISTER
const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" })
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(400).json({ message: "User already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
      email,
      password: hashedPassword,
    })

    res.status(201).json({
      message: "User registered successfully",
    })
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

// LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    // 1. Check fields
    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" })
    }

    // 2. Find user
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    // 4. Success
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
      },
    })
  } catch (error) {
    console.error("LOGIN ERROR:", error)
    res.status(500).json({ message: "Server error" })
  }
}


module.exports = {
  registerUser,
  loginUser,
}
