const router = require('express').Router()
const { getPlanets,
  postPlanet,
  getPlanet,
  deletePlanet } = require('../controllers/planets.controller')

  router.get('/planets', getPlanets)
  router.post('/planets', postPlanet)
  router.get('/planets/:id', getPlanet)
  router.delete('/planets/:id', deletePlanet)

  module.exports = router