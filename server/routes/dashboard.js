'use strict';
const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers').Dashboard;


//Total User Data
var fakeNumbers = [{
  date:['2018', '2019', '2020', '2021', '2022'],
  data: [300, 500, 200, 250, 360]
}];

router.route('/users')
  .get(DashboardController.dataUsers);

//Status Differences 
router.route('/status')
  .get(DashboardController.dataStatus);

//Job Count
router.route('/jobs')
  .get(DashboardController.dataJobs);
  
//
router.route('/lifestatus');

module.exports = router;