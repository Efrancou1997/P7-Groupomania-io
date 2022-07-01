// Formation OpenClassrooms - Développeur Web - Projet 7 

module.exports = (sequelize, DataTypes) => {
	const Comments = sequelize.define("Comments", {
		content: {
			type: DataTypes.STRING(200),
		},
		media: {
			type: DataTypes.STRING(200),
		},
		
	});
	return Comments;
};
