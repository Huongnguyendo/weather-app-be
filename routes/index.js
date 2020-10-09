var express = require("express");
var router = express.Router();
const weatherController = require("../controller/weatherController");
/* GET HOME PAGE */
router.get("/", weatherController.getWeatherData);


module.exports = router;
 