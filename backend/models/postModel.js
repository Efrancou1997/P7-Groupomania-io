// Formation OpenClassrooms - Développeur Web - Projet 7 

module.exports = (sequelize, DataTypes) => {
	const Posts = sequelize.define("Posts", {
		content: {
			type: DataTypes.STRING(200),
		},
		media: {
			type: DataTypes.STRING(200),
		},
	});
	return Posts;
};
