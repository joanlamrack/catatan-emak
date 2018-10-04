const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Authhelper = require("../helpers/authhelper");

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
		}
	},
	{
		timestamps: {
			createdAt: "createdAt",
			updatedAt: "updatedAt"
		}
	}
);

// ExpenseSchema.pre("save", function(next) {
// 	if (this.isNew) {
// 		let user = this;
// 		let password = Authhelper.hashpass(user.email + user.password);
// 		user.password = password;
// 	}
// 	next();
// });

// ExpenseSchema.post("save", function(error, doc, next) {
// 	if (error.name === "MongoError" && error.code === 11000) {
// 		next(new Error("email must be unique"));
// 	} else {
// 		next(error);
// 	}
// });

module.exports = mongoose.model("User", ExpenseSchema);
