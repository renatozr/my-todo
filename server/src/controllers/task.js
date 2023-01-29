const taskService = require('../services/task');

const findAll = async (_req, res) => {
  const tasks = await taskService.findAll();

  res.status(200).json(tasks);
};

const create = async (req, res) => {
  const { name, statusId } = req.body;

  const task = await taskService.create(name, statusId);

  res.status(201).json(task);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, statusId } = req.body;

  await taskService.update(id, name, statusId);

  res.status(200).json({ message: 'Task updated successfully!' });
};

const destroy = async (req, res) => {
  const { id } = req.params;

  await taskService.destroy(id);

  res.status(200).json({ message: 'Task destroyed successfully!' });
};

module.exports = {
  findAll,
  create,
  update,
  destroy,
};
