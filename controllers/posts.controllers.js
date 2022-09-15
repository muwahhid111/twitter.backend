const Post = require("../models/Post.models");
const Posts = require("../models/Post.models");
module.exports.postController = {
  addPost: async (req, res) => {
    const { text, userId, like } = req.body;
    try {
      await Post.create({
        text,
        userId,
        like,
      });
      res.json("Пост добавлен");
    } catch (error) {
      res.json(error);
    }
  },
  
  dropPost: async (req, res) => {
    try {
      await Post.findByIdAndDelete(req.params.id);
      res.json("Пост удален");
    } catch (error) {
      res.json(error);
    }
  },
  likePost: async (req, res) => {
    try {
      await Post.findByIdAndUpdate(req.params.id, {
        $push: { like: req.params.liked },
      });
      res.json("Лайк поставлен");
    } catch (error) {
      res.json(error);
    }
  },
  reLikePost: async (req, res) => {
    try {
      await Post.findByIdAndUpdate(req.params.id, {
        $pull: { like: req.params.reliked},
      });
      console.log(req.params)
      res.json("Лайк удален");
    } catch (error) {
      res.json(error.message);
    }
  },
  getPost: async (req, res) => {
    try {
      const getPostt = await Post.findById(req.params.id);
      res.json(getPostt);
    } catch (error) {
      res.json(error);
    }
  },
};
