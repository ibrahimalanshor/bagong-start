const routing = require('bagong').Router
const PostController = require('./post.controller.js')

const routes = [
	{
		path: '/',
		end: {
			get: PostController.get,
		}
	}
]

module.exports = routing({
	path: '/post',
	routes
})