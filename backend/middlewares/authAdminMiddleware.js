// Formation OpenClassrooms - Développeur Web - Projet 7 

const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		req.token = jwt.verify(token, process.env.TOKEN_KEY);
		if (!req.token.isAdmin) {
			throw "Vous n'avez pas les droits requis !";
		} else {
			req.auth = req.token.userId
			next();
		}
	} catch (error) {
		res.status(401).json({
			error,
		});
	}
};
