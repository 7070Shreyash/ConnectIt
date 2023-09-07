import Blog from "../models/Blog.js";
import User from "../models/User.js";

/* CREATE */
export const createBlog = async (req, res) => {
  try {
    const { userId, statement, description } = req.body;
    const user = await User.findById(userId);
    const newBlog = new Blog({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      statement : statement,
      description : description,
      userPicturePath: user.picturePath,
      likes: {},
      comments: [],
    });
    await newBlog.save();
    const blogs = await Blog.find();
    res.status(201).json(blogs);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
/* READ */
export const getFeedBlogs = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json(blog);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
/* UPDATE */
export const likeBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const blog = await Blog.findById(id);
    const isLiked = blog.likes.get(userId);

    if (isLiked) {
      blog.likes.delete(userId);
    } else {
      blog.likes.set(userId, true);
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { likes: blog.likes },
      { new: true }
    );
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
