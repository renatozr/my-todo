const express = require('express');
const taskRoute = require('./task');
const statusRoute = require('./status');

const router = express.Router();

router.use('/tasks', taskRoute);
router.use('/statuses', statusRoute);

module.exports = router;
