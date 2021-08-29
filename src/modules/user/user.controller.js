class UserController {

	async get(req, res, next) {
		try {
			return res.status(200).json('Ok')
		} catch (err) {
			next(err)
		}
	}

}

module.exports = new UserController