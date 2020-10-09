var express = require("express");
var router = express.Router();

/* GET USER PAGE */
router.get("/", function(req, res, next) {
    res.send( "response with a resource");
})

module.exports = router;