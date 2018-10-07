const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ItemSchema = new Schema(
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
		stock: {
			amount: {
				type: Number,
				required: true,
				default: 0,
				min: 0
			},
			unit: {
				type: String,
				required: true,
				enum: ["kg", "gram", "pack", "buah", "botol"],
				default: "kg"
			}
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

module.exports = mongoose.model("Item", ItemSchema);
