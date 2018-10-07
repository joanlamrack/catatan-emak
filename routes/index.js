const router = require("express").Router();
const UserController = require("../controllers/userControllers");
const ExpenseRoute = require("./expenses");
const authMiddleware = require("../middlewares/authMiddleware");

router.use(
	"/expenses",
	authMiddleware.checkifTokenExist,
	authMiddleware.checkifTokenValid,
	ExpenseRoute
);

router.get("/", function(req, res) {
	res.send("Well This works");
});

router.post("/register", UserController.signup);
router.post("/login", UserController.login);

module.exports = router;
