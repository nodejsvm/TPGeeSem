const cat = require('../models/category.model.js');

exports.findAll = (req, res) => {
     cat.getAll(( err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || 'Ocurrió un error al tratar de mostrar las categoria.'
            });
        else res.send(data);
    });
};