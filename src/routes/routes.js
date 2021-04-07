const express = require('express');
const router = express.Router();

const patientController = require('../controller/patient');

router.get('/patient/:id', patientController.show);
router.get('/patient/:id/plan', patientController.plan);

module.exports = router;