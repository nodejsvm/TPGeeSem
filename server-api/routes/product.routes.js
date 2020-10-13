module.exports = (app) => {
  const product = require("../controllers/product.controller.js");

  app.post("/producto", product.create);

  app.get("/producto", product.findAll);

  app.get("/producto/:productId", product.findOne);

  app.put("/producto/:productId", product.update);

  app.delete("/producto/:productId", product.delete);

  app.delete("/producto", product.deleteAll);
};
