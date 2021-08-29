const validator = require('bagong').Validator
const UserModel = require('../../user/user.model')

const rules = {
	username: ['required', 'string', { type: 'unique', value: { model: UserModel, key: 'username' } }],
	password: ['required', { type: 'min', value: 5 }]
}

module.exports = validator(rules)