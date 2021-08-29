const routing = require('bagong').Router
const AuthController = require('./auth.controller.js')
const AuthRequest = require('./requests')

const routes = [
	{
		path: '/register',
		end: {
			post: [AuthRequest.register, AuthController.register],
		}
	},
	{
		path: '/login',
		end: {
			post: [AuthRequest.login, AuthController.login],
		}
	}
]

module.exports = routing({
	path: '/auth',
	routes
})