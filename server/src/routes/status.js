const express = require('express');
const statusController = require('../controllers/status');

const router = express.Router();

router.route('/')
  .get(statusController.findAll);

module.exports = router;
