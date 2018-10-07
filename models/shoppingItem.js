const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ShoppingItemSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			minlength: 1
		},
		email: {
			type: String,
			required: true,
			unique: true,
			minlength: 1,
			match: [
				/^\w+@([a-z]+\.)+[a-z]{2,3}$/,
				"Please input a valid email format"
			]
		},
		password: {
			type: String,
			required: true,
			minlength: [8, "Password Length minimum 8"]
		}
	},
	{
		timestamps: {
			createdAt: "createdAt",
			updatedAt: "updatedAt"
		}
	}
);

module.exports = mongoose.model("ShoppingItem", ShoppingItemSchema);
