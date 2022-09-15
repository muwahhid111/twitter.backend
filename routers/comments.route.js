const { Router } = require("express")
const { commentsController } = require("../controllers/comments.controllers");
const router = Router();
router.get("/commens/:id", commentsController.getComment);
router.post('/comment', commentsController.addComments);
router.patch('/comment/:id', commentsController.patchComments);
router.delete('/comment/:id', commentsController.dropComment);


module.exports = router;