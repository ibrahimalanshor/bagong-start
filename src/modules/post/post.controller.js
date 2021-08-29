class PostController {

	async get(req, res, next) {
		try {
			return res.status(200).json('Get Post')
		} catch (err) {
			next(err)
		}
	}

}

module.exports = new PostController