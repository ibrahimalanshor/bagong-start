const routing = require('bagong').Router
const UserController = require('./user.controller.js')

const routes = [
	{
		path: '/',
		end: {
			get: UserController.get,
		}
	}
]

module.exports = routing({
	path: '/user',
	routes
})