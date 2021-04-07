const express = require('express');
const router = express.Router();

const patientController = require('../controller/patient');

router.get('/patient/:id', patientController.show);

module.exports = router;