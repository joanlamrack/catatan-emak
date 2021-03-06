const User = require("../models/users");
const AuthHelper = require("../helpers/authhelper");

class AuthMiddleware {
	constructor() {}

	static checkifTokenExist(req, res, next) {
		if (req.headers.token) {
			next();
		} else {
			res.status(403).json({
				error: "not authorized"
			});
		}
	}

	//if valid, inject header with userId
	static checkifTokenValid(req, res, next) {
		try {
			let id = AuthHelper.decodeToken(req.headers.token).id;
			User.findById(id)
				.then(userfound => {
					if (userfound) {
						req.headers.userId = userfound._id;
						next();
					} else {
						res.status(400).json({
							error: "user not found"
						});
					}
				})
				.catch(err => {
					res.status(400).json({
						error: err.message
					});
				});
		} catch (error) {
			res.status(400).json({
				error: error.message
			});
		}
	}

	// static checkifArticleOwnedByUser(req, res, next) {
	// 	User.findOne({ _id: req.headers.userId, articles: req.params.id })
	// 		.then(userFound => {
	// 			if (userFound) {
	// 				next();
	// 			} else {
	// 				res.status(406).json({
	// 					error: "forbidden"
	// 				});
	// 			}
	// 		})
	// 		.catch(err => {
	// 			res.status(400).json({
	// 				error: err
	// 			});
	// 		});
	// }
}

module.exports = AuthMiddleware;
