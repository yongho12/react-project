'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Cases", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      patientName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      submitDate: {
        type: Sequelize.DATE,
      },
      providerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      technicianId: {
        type: Sequelize.INTEGER,
        // references: { model: "Users" },
      },
      clinicianId: {
        type: Sequelize.INTEGER,
        // references: { model: "Users" },
      },
      status: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cases');
  }
};