'use strict';

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  o.submitDate = new Date();
  return o;
}


module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert("Cases", [
       r({
         patientName: "John Doe",
         providerId: 1,
         technicianId: 4,
         clinicianId: 6,
         status: 0,
       }),
       r({
         patientName: "Jenny Perkins",
         providerId: 2,
         technicianId: 4,
         clinicianId: 5,
         status: 0,
       }),
       r({
         patientName: "John Smith",
         providerId: 1,
         technicianId: 4,
         clinicianId: 5,
         status: 0,
       }),
       r({
         patientName: "Helen Doe",
         providerId: 1,
         technicianId: 4,
         clinicianId: 5,
         status: 0,
       }),
     ]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Cases');
  }
};
