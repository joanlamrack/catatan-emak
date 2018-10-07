const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PriceHistorySchema = new Schema(
	{
		item: {
			type: Schema.Types.ObjectId,
			ref: "Item"
		},
		price: {
			type: Number,
			required: true
		}
	},
	{
		timestamps: {
			createdAt: "createdAt",
			updatedAt: "updatedAt"
		}
	}
);

module.exports = mongoose.model("PriceHistory", PriceHistorySchema);
