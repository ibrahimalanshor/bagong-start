const Bagong = require('bagong').App
const routes = require('./src/routes')
const middlewares = require('./src/middlewares')

const config = require('./app/config')

const app = new Bagong({
  routes,
  middlewares,
  port: config.app.port
})

app.connectDatabase(config.db)

app.listen()