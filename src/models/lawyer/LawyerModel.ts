const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/dbConnection');

class Lawyers extends Model {}

Lawyers.init({
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	email: {
		type: DataTypes.TEXT,
		allowNull: false,
		unique: true, 
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	firstName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	created_at: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW
	}
}, {
	sequelize, 
	modelName: 'Lawyers'
});

(async () => {
	await sequelize.sync();
	const lawayer_Jacy = await Lawyers.create({
		email: 'jacy@Lawyer.com',
		password: 'password',
		firstName: 'Jacy',
		lastName: 'keys'
	});
	console.log(lawayer_Jacy.toJSON());
})();

console.log(Lawyers === sequelize.models.Lawyers); // true