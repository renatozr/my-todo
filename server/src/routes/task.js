const express = require('express');
const taskController = require('../controllers/task');

const router = express.Router();

router.route('/')
  .get(taskController.findAll)
  .post(taskController.create);

router.route('/:id')
  .put(taskController.update)
  .delete(taskController.destroy);

module.exports = router;
