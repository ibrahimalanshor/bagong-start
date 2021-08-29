const Model = require('bagong').Model

class UserModel extends Model {

  model = 'user'

  property() {
    return {
      username: String,
      password: String,
    }
  }

  attribute() {
    return {
      timestamps: true
    }
  }

}

module.exports = new UserModel().get()