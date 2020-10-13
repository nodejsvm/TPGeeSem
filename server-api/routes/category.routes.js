module.exports = (app) => {
  const category = require("../controllers/category.controller.js");

  app.post("/categoria", category.create);

  app.get("/categoria", category.findAll);

  app.get("/categoria/:categoryId", category.findOne);

  app.put("/categoria/:categoryId", category.update);

  app.delete("/categoria/:categoryId", category.delete);

  app.delete("/categoria", category.deleteAll);
};
