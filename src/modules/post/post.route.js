const routing = require('bagong').Router
const Auth = require('bagong-auth').Middleware

const PostController = require('./post.controller.js')

const routes = [
	{
		path: '/',
		end: {
			get: [Auth, PostController.get],
		}
	}
]

module.exports = routing({
	path: '/post',
	routes
})