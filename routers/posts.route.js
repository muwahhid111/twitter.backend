const { Router } = require("express")
const { postController } = require("../controllers/posts.controllers");
const router = Router();

router.post('/post', postController.addPost);
router.get('/post/:id', postController.getPost);
router.patch('/post/:id/like/:liked', postController.likePost);
router.patch('/post/:id/relike/:reliked', postController.reLikePost);
router.patch('/post/:id', postController.dropPost);

module.exports = router;