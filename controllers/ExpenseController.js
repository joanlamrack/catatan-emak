const Expense = require("../models/expenses");
const User = require("../models/users");

class ExpenseController {
	static create(req, res) {
		let { name, price } = req.body;
		let { userId } = req.headers;
		Expense.create({
			name,
			price,
			owner: userId
		})
			.then(createResponse => {
				res.status(200).json(createResponse);
			})
			.catch(err => {
				res.status(400).json(err);
			});
	}

	static deleteById(req, res) {
		let { expenseId } = req.params;
		let { userId } = req.headers;
		Expense.findOneAndRemove({ _id: expenseId, owner: userId })
			.then(removedExpense => {
				res.status(200).json(removedExpense);
			})
			.catch(err => {
				res.status(500).json(err);
			});
	}

	static getAll(req, res) {
		let { userId } = req.headers;

		Expense.find({ owner: userId })
			.then(foundExpenses => {
				res.status(200).json(foundExpenses);
			})
			.catch(err => {
				res.status(400).json(err);
			});
	}
}

module.exports = ExpenseController;
