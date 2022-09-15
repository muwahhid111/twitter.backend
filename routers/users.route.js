const { Router } = require("express")
const { userController } = require("../controllers/users.controllers");
const router = Router();

router.post('/user', userController.addUser)



module.exports = router;