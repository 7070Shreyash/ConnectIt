import bcrypt from "bcrypt"; // pwd encryption
import jwt from "jsonwebtoken"; // token for authorizatin
import User from "../models/User.js";

/* REGISTER USER */
// calling to the db is always async
//req from frontEnd and res back to FrontEnd
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;


    //Encryption of the password to be stored in DB
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    // Using JS object  properties
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000), // some random values
      impressions: Math.floor(Math.random() * 10000),
    });
    // to actually save the Object in the DB
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    // response send to the usert in the form of json
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    // deleting the user password
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
