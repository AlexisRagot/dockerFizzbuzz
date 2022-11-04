var express = require('express');
var router = express.Router();

const FizzBuzzService = require("../services/fizzbuzz");

router.get('/fizzbuzz', (request, response) => {
    response.json(FizzBuzzService.fizzbuzz())
});

module.exports = router;