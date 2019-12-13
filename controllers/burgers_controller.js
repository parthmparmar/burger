var express = require("express");
var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function (req, res) {
    burgers.selectAll(function (data) {
        var dataValue = {
            burgers: data
        };
        res.render("index", dataValue);
    });
});

router.post("/api/burgers", function (req, res) {
    burgers.insertOne(["name"], [req.body.name], function (results) {
        res.json({ id: results.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burgers.updateOne({ devoured: res.body.devoured }, condition, function (results) {
        if (results.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;