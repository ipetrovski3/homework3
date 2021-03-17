let PLANETS = [
  { id: 1, name: "Earth", size: 453333, distanceFromSun: 12395 },
  { id: 2, name: "Mars", size: 666333, distanceFromSun: 24395 },
];

exports.getPlanets = (req, res, next) => {
  res.status(200).send(PLANETS);
};

exports.postPlanet = (req, res, next) => {
  console.log(res.body);
  res.status(201).send();
};

exports.getPlanet = (req, res, next) => {
  const id = +req.params.id;

  const foundPlanet = PLANETS.find((planet) => planet.id === id);
  if (!foundPlanet) {
    res.status(400).send("Cannot find such planet!");
  }
  res.status(200).send(foundPlanet);
};

exports.deletePlanet = (res, req, next) => {
  const id = +req.params.id;
  if (!id || typeof id !== "number") {
    res.status(400).send("Cannot delete planet");
  }
  res.status(200).send();
};
