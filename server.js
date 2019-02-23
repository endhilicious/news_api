const express = require('express')
const next = require('next')
const path = require('path')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.NODE_ENV === 'production' ? 9999 : 3000

const app = next({dir: '.', dev })

// Routes
const routes = require('./config/routes')
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  server.use(compression())
  server.get('/service-worker.js', (req, res) => {
    app.serveStatic(req, res, path.join(__dirname, '.next', req.url))
  })
  server.use(express.static(__dirname, { dotfiles: 'allow' }))
  server.use(handler)

  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
