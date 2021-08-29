const Auth = require('bagong-auth').Service
const UserModel = require('../user/user.model')
const config = require('../../../app/config')

class AuthService extends Auth {

	key = config.app.key

	async create(data) {
		const user = await UserModel.create(data)

		return user
	}

	async search(username) {
		const user = await UserModel.findOne({ username }).lean()

		return user
	}

}

module.exports = new AuthService