const config = require('../../app/config')

module.exports = (req, res, next) => {
  req.key = config.app.key

  next()
}