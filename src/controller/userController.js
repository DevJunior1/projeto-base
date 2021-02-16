const router = require("express").Router();
const userService = require('../service/userService')

router.get('/', (req, res, next) => {
	userService.find()
		.then((users) => res.status(200).json(users))
		.catch((error) => next(error));
})

module.exports = router