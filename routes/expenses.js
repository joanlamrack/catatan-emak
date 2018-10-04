const router = require("express").Router();
const ExpenseController = require("../controllers/expenseController");

router
	.route("/")
	.post(ExpenseController.create)
	.get(ExpenseController.getAll);

module.exports = router;
