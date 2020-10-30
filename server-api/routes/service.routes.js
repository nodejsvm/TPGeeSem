module.exports = (app) => {
  const service = require("../controllers/service.controller.js");

  app.post("/servicio", service.create);

  app.get("/servicio", service.findAll);

  app.get("/servicio/:servId", service.findOne);

  app.put("/servicio/:servId", service.update);
  
  app.delete("/servicio/:servId", service.delete);

  app.delete("/servicio", service.deleteAll);
};
