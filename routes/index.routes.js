const router = require('express').Router()
const homePage = require('./homepage.routes')
const planetRoutes = require('./planet.routes')
const notFound = require('./notFound.routes')

router.use(homePage)
router.use(planetRoutes)
router.use(notFound)

module.exports = router