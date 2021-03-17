const router = require("express").Router();
const path = require("path");

const pathToRoot = require.main.path
const pathToHomePage = path.join(pathToRoot, 'public', 'index.html')

router.get("/", (req, res) => {
  res.sendFile(pathToHomePage);
});

module.exports = router;
