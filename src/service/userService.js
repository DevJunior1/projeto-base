const user = require('../model/user')
const CustomError = require('../error/customError');

function service() {
	// construtor
}

service.find = () => {
	const users = user.find()
	if (!users) {
		throw new CustomError('Não existe nenhum usuário cadastrado', 500);
	}
	return users
}

module.exports = service