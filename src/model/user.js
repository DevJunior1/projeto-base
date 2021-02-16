module.exports = {
	find: () => {
		const users = [{
			id: 1,
			name: "Fulano de tal"
		}]
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(users);
			}, 5000);
		});
	}
}