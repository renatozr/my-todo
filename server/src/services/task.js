const { Task, Status } = require('../models');

const findAll = async () => {
  const tasks = await Task.findAll({
    attributes: { exclude: ['statusId'] },
    include: { model: Status, as: 'status' },
    order: ['statusId'],
  });

  return tasks;
};

const create = async (name, statusId) => {
  const task = await Task.create({ name, statusId });

  return task;
};

const update = async (id, name, statusId) => Task.update({ name, statusId }, { where: { id } });

const destroy = async (id) => Task.destroy({ where: { id } });

module.exports = {
  findAll,
  create,
  update,
  destroy,
};
