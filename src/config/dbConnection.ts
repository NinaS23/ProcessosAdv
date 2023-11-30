const { Sequelize } = require('sequelize');
const dotenv = require('dotenev');

dotenv.config();

module.exports = function() {
	const sequelize = new Sequelize(
		'processos_adv',
		process.env.PG_USER,
		process.env.PG_PASSWORD, {
			host: 'localhost',
			dialect: 'postgres'
		});
	
	const testDBConnection = async () => {
		try {
			await sequelize.authenticate();
			console.log('Connection has been established successfully.');
		} catch (error) {
			console.error('Unable to connect to the database:', error);
		}
	};

	testDBConnection();
};


