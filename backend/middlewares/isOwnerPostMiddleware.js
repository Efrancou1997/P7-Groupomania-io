// Formation OpenClassrooms - Développeur Web - Projet 7 

const db = require("../models");
const postModel = db.post;

module.exports = (req, res, next) => {
	try {
		postModel
			.findOne({
				where: { id: req.params.id },
			})
			.then((post) => {
				if (post.UserId === req.token.userId) {
					next();
				} else {
					return res
						.status(403)
						.json({ message: "Vous n'êtes pas le propriétaire !" });
				}
			})
			.catch((err) =>
				res.status(403).json({
					message: "Vous n'êtes pas le propriétaire ou utilisateur inexistant!",
				}),
			);
	} catch (error) {
		res.status(403).json({ error });
	}
};
