const Bagong = require('bagong').App
const routes = require('./src/routes')

const config = require('./app/config').app

const app = new Bagong(routes, config.port)

app.listen()