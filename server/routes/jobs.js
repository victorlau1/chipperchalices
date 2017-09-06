const express = require('express');
const router = express.Router();
const JobController = require('../controllers').Jobs;

router.route('/job')

  //handle get request from client to retrieve all job cards from db
  .get(JobController.getAll)

  //handle post request from client to create new job card
  .post(JobController.create)
  ;

router.route('/job/update')

  //handle post request from client to update status on a job card
  .post(JobController.update)
  ;


module.exports = router;