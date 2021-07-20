var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send(
    express.static(path.join(__dirname, "../../front/build/index.html"))
  );
});

module.exports = router;
