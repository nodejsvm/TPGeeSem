module.exports = app => {
    const prod = require('../controllers/product.controller.js');

    app.get('/producto', prod.findAll);
}