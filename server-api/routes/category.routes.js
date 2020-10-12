module.exports = app => {
     const category = require('../controllers/category.controller.js');
 
     app.get('/Categoria', category.findAll);
 }