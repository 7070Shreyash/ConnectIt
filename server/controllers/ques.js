import Ques from "../models/Ques.js";
import User from "../models/User.js";

/* CREATE */
export const createQues = async (req, res) => {
  try {
    const { userId, statement} = req.body;
    const user = await User.findById(userId);
    const newQues = new Ques({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      statement,
      userPicturePath: user.picturePath,
      solution: "",
      likes: {},
      comments: [],
    });
    await newQues.save();
    const ques = await Ques.find();
    res.status(201).json(ques);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedQues = async (req, res) => {
  try {
    const ques = await Ques.find();
    res.status(200).json(ques);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likeQues = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const ques = await Ques.findById(id);
    const isLiked = ques.likes.get(userId);

    if (isLiked) {
      ques.likes.delete(userId);
    } else {
      ques.likes.set(userId, true);
    }
    const updatedQues = await Ques.findByIdAndUpdate(
      id,
      { likes: ques.likes },
      { new: true }
    );
    res.status(200).json(updatedQues);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const AnsQues = async (req, res) => {
  try {
    const { id } = req.params;
    const {solution } = req.body;
    const ques = await Ques.findById(id);
    ques.solution = solution;
    const updatedQues = await Ques.findByIdAndUpdate(
      id,
      { solution: ques.solution },
      { new: true }
    );
    res.status(200).json(updatedQues);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

