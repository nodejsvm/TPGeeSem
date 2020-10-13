module.exports = (app) => {
  const client = require("../controllers/client.controller.js");

  app.post("/cliente", client.create);

  app.get("/cliente", client.findAll);

  app.get("/cliente/:clientId", client.findOne);

  app.put("/cliente/:clientId", client.update);

  app.delete("/cliente/:clientId", client.delete);
  
  app.delete("/cliente", client.deleteAll);
};
