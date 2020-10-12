const prod = require('../models/product.model.js');

//CREAR PRODUCTO
exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    prod.create(prod, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || 'Ocurrió un error al tratar de crear una prodegoria.'
        });
      else res.send(data);
    });
  };


//MOSTRAR SOLO UN PRODUCTO
exports.findOne = (req, res) => {
    prod.findById(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No se encuntra una prodegoria con el siguiente id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error al tratar de recuperar prodegoria con el siguiente id " + req.params.customerId
          });
        }
      } else res.send(data);
    });
  };

//MOSTRAR TODAS LOS PRODUCTOS
exports.findAll = (req, res) => {
     prod.getAll(( err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || 'Ocurrió un error al tratar de mostrar las prodegorias.'
            });
        else res.send(data);
    });
};

//ACTUALIZAR PRODUCTOS
exports.update = (req, res) => {
    
    if (!req.body) {
      res.status(400).send({
        message: "El contenido no puede estar vacio!"
      });
    }
  
    prod.updateById(
      req.params.customerId,
      new Customer(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `No se encuntra una prodegoria con el siguiente id ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Error al tratar de actualizar una prodegoria con el siguiente id " + req.params.customerId
            });
          }
        } else res.send(data);
      }
    );
  };

//ELIMINAR UN PRODUCTO
exports.delete = (req, res) => {
    prod.remove(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No se encuntra una prodegoria con el siguiente id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error al tratar de eliminar una prodegoria con el siguiente i " + req.params.customerId
          });
        }
      } else res.send({ message: `Customer was deleted successfully!` });
    });
  };


//ELIMINAR TODOS LOS PRODUCTOS
exports.deleteAll = (req, res) => {
    prod.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocurrio un error al tratar de eliminar todas las prodegorias."
        });
      else res.send({ message: `Todas las prodegorias fueron eliminadas correctamente!` });
    });
  };