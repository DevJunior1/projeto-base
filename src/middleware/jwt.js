require('dotenv').config();
const CustomError = require('../error/customError');

const middleware = function(req, res, next) {
	let token = req.headers['authorization'];
	let decoded = "fuinção que decodifica o jwt passanbdo o token" + token
	
	if (!decoded) {
		throw new CustomError('Verifique seu token de acesso!', 401);
	} else {
		next();
	}
};

module.exports = middleware;