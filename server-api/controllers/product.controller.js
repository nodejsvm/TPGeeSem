const prod = require('../models/product.model.js');

exports.findAll = (req, res) => {
    prod.getAll(( err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || 'Ocurrió un error al tratar de mostrar los productos.'
            });
        else res.send(data);
    });
};