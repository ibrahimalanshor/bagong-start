const AuthService = require('./auth.service')

class AuthController {

	async register(req, res, next) {
		try {
			const token = await AuthService.register(req.body)

			return res.status(200).json(token)
		} catch (err) {
			next(err)
		}
	}

	async login(req, res, next) {
		try {
			const token = await AuthService.login(req.body)

			return res.status(200).json(token)
		} catch (err) {
			next(err)
		}
	}

}

module.exports = new AuthController