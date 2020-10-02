'use strict';
module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define('Case', {
    patientName: DataTypes.STRING,
    submitDate: DataTypes.DATE,
    providerId: DataTypes.INTEGER,
    technicianId: DataTypes.INTEGER,
    clinicianId: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {});
  Case.associate = function(models) {
    // associations can be defined here
    Case.belongsTo(models.User, { foreignKey: 'providerId' });
    // Case.belongsTo(models.User, { foreignKey: "technicianId" });
    // Case.belongsTo(models.User, { foreignKey: "clinicianId" });

  };
  return Case;
};