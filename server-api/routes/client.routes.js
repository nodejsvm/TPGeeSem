module.exports = app => {
     const client = require('../controllers/client.controller.js');
 
     app.get('/Cliente', client.findAll);
 }