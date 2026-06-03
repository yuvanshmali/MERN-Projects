import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // check if user is exist or not
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    // check if user's password is same as hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    // create token (explained in register user)
    const token = createToken(user._id);

    res.json({ success: true, token })

  }
    catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" })
  }
};

// Creating JWT
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
  console.log(process.env.JWT_SECRET);
};

// Register user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    // checking is user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // validating email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // genSalt() generates a random salt string that will be used while hashing a password.

    // generte new user
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // save new user to database(mongoDB)
    const user = await newUser.save();

    // create a jwt token which we send to user so that we can verify by checking this token that user is valid or not
    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, messsage: "Error" });
  }
};

export { loginUser, registerUser };
