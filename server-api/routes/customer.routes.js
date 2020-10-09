module.exports = app => {
    const customers = require("../controllers/customer.controller.js");
  
    // // Create a new Customer
    // app.post("/customers", customers.create);
  
    // Retrieve all Customers
    app.get("/Producto", customers.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/Producto/:customerId", customers.findOne);
  
    // Update a Customer with customerId
    app.put("/Producto/:customerId", customers.update);
  
    // Delete a Customer with customerId
    app.delete("/Producto/:customerId", customers.delete);
  
    // Create a new Customer
    app.delete("/Producto", customers.deleteAll);
  };

  