const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ExpenseSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			minlength: 1
		},
		price: {
			type: Number,
			required: true,
			min: [0, "Price can't be minus"]
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: "User"
		}
	},
	{
		timestamps: {
			createdAt: "createdAt",
			updatedAt: "updatedAt"
		}
	}
);

module.exports = mongoose.model("Expense", ExpenseSchema);
