const statusService = require('../services/status');

const findAll = async (_req, res) => {
  const statuses = await statusService.findAll();

  res.status(200).json(statuses);
};

module.exports = {
  findAll,
};
