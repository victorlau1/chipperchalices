'use strict';
const express = require('express');
const router = express.Router();
const AnalyticController = require('../controllers').Analytic;

//Total User Data
router.route('/users')
  .get(AnalyticController.dataUsers);

//Status Count 
router.route('/status')
  .get(AnalyticController.dataStatus);

//Job Count
router.route('/jobs')
  .get(AnalyticController.dataJobs);
  
//Days Between Cycles
router.route('/cycles')
  .get(AnalyticController.dataCycles);

router.route('/companies')
  .get(AnalyticController.dataCompanies);

module.exports = router;