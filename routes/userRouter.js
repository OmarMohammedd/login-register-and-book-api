const Router = require("express")
const userController = require("../controllers/userController.js")
const router = Router.Router()


router.post("/api/users/register", userController.register)
router.post("/api/users/login", userController.login)


module.exports = router