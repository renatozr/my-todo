const { Status } = require('../models');

const findAll = async () => {
  const statuses = await Status.findAll();

  return statuses;
};

module.exports = {
  findAll,
};
