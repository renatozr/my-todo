module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
  });

  return Status;
};
