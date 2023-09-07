import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import blogRoutes from "./routes/blogs.js";
import quesRoutes from "./routes/ques.js";
import {createBlog} from "./controllers/blogs.js";
import { register } from "./controllers/auth.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";
import {createQues} from "./controllers/ques.js";
import Ques from "./models/Ques.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts ,blogs ,ques} from "./data/index.js";
import Blog from "./models/Blog.js";

/* CONFIGURATIONS */
// to grab the file url for while using modules
//TYPE == MODULE
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
//.use is used for middlewares
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// all the images and assests  are stored in this
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

/* FILE STORAGE */
// uploaded files are stored in this location
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

/* ROUTES WITH FILES */
//pictures uploaded by the user is stored in the local system using post after getting request from the 
app.post("/auth/register", upload.single("picture"), register); // register is a controller 
app.post("/posts", verifyToken, upload.single("picture"), createPost);
app.post("/blogs",verifyToken,createBlog);
// app.post("/explore/faq",verifyToken,createQues);
/* ROUTES */
// need to be noted again
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/blogs",blogRoutes);
// app.use("/explore/faq",quesRoutes);
/* MONGOOSE SETUP FOR DB Connections*/
//Backup
const PORT = process.env.PORT || 6001;
mongoose.set('strictQuery', true); // for ignoring waring

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
    // Blog.insertMany(blogs);
    // Ques.insertMany(ques);
  })
  .catch((error) => console.log(`${error} did not connect`));

  //React router for navigatioms
  //Formik and Yup for form validation
  //Toolkit for state management
  //React Persistane for local storage
  //dropzone for drop
  //jwt for validation
  //multer for file uploadations