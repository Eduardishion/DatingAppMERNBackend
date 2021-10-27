const express = require("express");
const router = express.Router();
const controllerApp = require('../controllers/controllerApp');

router.get("/", controllerApp.hello);

router.post('/dating/createCard',controllerApp.createCard);

router.get('/dating/getCards', controllerApp.getCards);

module.exports = router;