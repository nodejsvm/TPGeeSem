const cat = require('../models/category.model.js');

//CREAR CATEGORIA
exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    cat.create(cat, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || 'Ocurrió un error al tratar de crear una categoria.'
        });
      else res.send(data);
    });
  };


//MOSTRAR SOLO UNA CATEGORIA
exports.findOne = (req, res) => {
    cat.findById(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No se encuntra una categoria con el siguiente id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error al tratar de recuperar categoria con el siguiente id " + req.params.customerId
          });
        }
      } else res.send(data);
    });
  };

//MOSTRAR TODAS LAS CATEGORIAS
exports.findAll = (req, res) => {
     cat.getAll(( err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || 'Ocurrió un error al tratar de mostrar las categorias.'
            });
        else res.send(data);
    });
};

//ACTUALIZAR CATEGORIA
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "El contenido no puede estar vacio!"
      });
    }
  
    cat.updateById(
      req.params.customerId,
      new Customer(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `No se encuntra una categoria con el siguiente id ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Error al tratar de actualizar una categoria con el siguiente id " + req.params.customerId
            });
          }
        } else res.send(data);
      }
    );
  };

//ELIMINAR UNA CATEGORIA
exports.delete = (req, res) => {
    cat.remove(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No se encuntra una categoria con el siguiente id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error al tratar de eliminar una categoria con el siguiente i " + req.params.customerId
          });
        }
      } else res.send({ message: `Customer was deleted successfully!` });
    });
  };


//ELIMINAR TODAS LAS CATEGORIAS
exports.deleteAll = (req, res) => {
    cat.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocurrio un error al tratar de eliminar todas las categorias."
        });
      else res.send({ message: `Todas las categorias fueron eliminadas correctamente!` });
    });
  };