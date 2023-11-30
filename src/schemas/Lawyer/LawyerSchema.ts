const joi = require('Joi');

module.exports = () => ({
	body: joi.object({
		email: joi.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
		password: joi.string().min(5).max(10),
		name: joi.string().min(5).max(20),
		created_at: joi.string().isoDate()
	})
});