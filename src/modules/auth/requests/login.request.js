const validator = require('bagong').Validator
const UserModel = require('../../user/user.model')

const rules = {
	username: ['required', 'string', { type: 'exists', value: { model: UserModel, key: 'username' } }],
	password: ['required']
}

module.exports = validator(rules)