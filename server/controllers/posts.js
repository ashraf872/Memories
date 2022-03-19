import PostMessage  from "../models/postMessage.js";


export const  getposts = async  (req, res) => {
    try {
            const postMeassage = await PostMessage.find();
            res.status(200).json(postMeassage);
    }
    catch (err) {
        res.status(404).json({ message: err.message });

    }
}
export const createposts = async (req, res) => {
 const post = req.body.post;
 const newPost = new PostMessage(post);
    try {
      await newPost.save();
      res.status(201).json(newPost);
        }
 catch (err) {
     res.status(409).json({ message: err.message });

 }
}