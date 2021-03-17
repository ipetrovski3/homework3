const router = require("express").Router();

router.use("*", (req, res) => {
  res.status(404).send("Page Not Found!");
});

module.exports = router;
