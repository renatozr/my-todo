module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    statusId: {
      allowNull: false,
      references: { model: 'Statuses', key: 'id' },
      type: DataTypes.INTEGER,
    },
    createdAt: {
      defaultValue: DataTypes.NOW,
      type: DataTypes.DATE,
    },
  }, {
    updatedAt: false,
  });

  Task.associate = (models) => {
    Task.belongsTo(models.Status, { foreignKey: 'statusId', as: 'status' });
  };

  return Task;
};
