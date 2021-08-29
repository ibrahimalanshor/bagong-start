const Service = require('bagong').Service
const UserRepository = require('./user.repository.js')

class UserService extends Service {

	async get() {
		const users = await UserRepository.find({})

		return users
	}

}

module.exports = new UserService