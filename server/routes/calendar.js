'use strict';
const express = require('express');
const router = express.Router();
const config = require('config')['passport'];
const axios = require('axios');
const CalendarMiddleware = require('../middleware').calendar;

router.route('/')

  .post(CalendarMiddleware.saveGoogleEvent);

module.exports = router;
