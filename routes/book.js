const Router = require("express")
const bookController = require("../controllers/bookController")
const authMiddleware = require("../middlewares/auth.js")
const router = Router.Router()


router.post("/api/books", authMiddleware, bookController.addNewBook ) // Admin Only
router.get("/api/books" ,authMiddleware, bookController.getAllBooks )
router.get("/api/books/:id", authMiddleware, bookController.getOneBook )
router.put("/api/books/:id",authMiddleware, bookController.updateBook ) // Admin Only
router.delete("/api/books/:id",authMiddleware, bookController.deleteBook ) // Admin Only


module.exports = router