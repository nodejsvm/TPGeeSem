module.exports = app => {
     const service = require('../controllers/service.controller.js');
 
     app.get('/Servicio', service.findAll);
 }