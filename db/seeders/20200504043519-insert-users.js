'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      r({
        username: "Smile Clinic",
        email: "demo1@example.com",
        hashedPassword: createPassword(),
      }),
      r({
        username: "PainFree Clinic",
        email: "yusuke@example.com",
        hashedPassword: createPassword(),
      }),
      r({
        username: "Greenway Clinic",
        email: "petra@example.com",
        hashedPassword: createPassword(),
      }),
      r({
        username: "James Technician",
        email: "demo@example.com",
        hashedPassword: createPassword(),
      }),
      r({
        username: "Dr Peter Young",
        email: "demo2@example.com",
        hashedPassword: createPassword(),
      }),
      r({
        username: "Dr Susan Smith",
        email: "demo3@example.com",
        hashedPassword: createPassword(),
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
