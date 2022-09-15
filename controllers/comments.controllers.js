const Comments = require("../models/Comment.models");
module.exports.commentsController = {
  //добавить. удалить. вывод. изменить
  addComments: async (req, res) => {
    const { text, userId, postId } = req.body;
    try {
      await Comments.create({
        text,
        userId,
        postId,
      });
      res.json("Комментарий добавлен");
    } catch (error) {
      res.json(error);
    }
  },
  dropComment: async (req, res) => {
    try { await Comments.findByIdAndRemove(req.params.id);
        res.json("Комментарий удален")
    } catch (error) {
      res.json(error);
    }
  },
  getComment: async (req, res) => {
    try {
       const getCom = await Comments.findById(req.params.id).populate('userId', 'postId');
        res.json(getCom)

    } catch (error) {
      res.json(error);
    }
  },
  patchComments: async (req, res) => {
    try { await Comments.findByIdAndUpdate(req.params.id, { $set: {text}})
    } catch (error) {
      res.json(error);
    }
  },
};
