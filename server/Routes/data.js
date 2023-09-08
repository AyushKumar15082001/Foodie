const express = require('express');
const dataRouter = express.Router();
const { auth } = require('../Middlewares/auth');
const { dataController } = require('../Controllers/data');

dataRouter.get('/',auth, dataController)

module.exports = { dataRouter };