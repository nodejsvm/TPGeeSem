module.exports = (app) => {
  const service = require("../controllers/service.controller.js");

  // Create a new Customer
  app.post("/servicio", service.create);

  // Retrieve all Customers
  app.get("/servicio", service.findAll);

  // Retrieve a single Customer with customerId
  app.get("/servicio/:serviceId", service.findOne);

  // Update a Customer with customerId
  app.put("/servicio/:serviceId", service.update);

  // Delete a Customer with customerId
  app.delete("/servicio/:serviceId", service.delete);

  // Create a new Customer
  app.delete("/servicio", service.deleteAll);

};
