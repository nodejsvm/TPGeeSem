const serv = require('../models/service.model.js');

//CREAR SER
exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    serv.create(serv, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || 'Ocurrió un error al tratar de crear una servegoria.'
        });
      else res.send(data);
    });
  };


//MOSTRAR SOLO UN servUCTO
exports.findOne = (req, res) => {
    serv.findById(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No se encuntra una servegoria con el siguiente id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error al tratar de recuperar servegoria con el siguiente id " + req.params.customerId
          });
        }
      } else res.send(data);
    });
  };

//MOSTRAR TODAS LOS servUCTOS
exports.findAll = (req, res) => {
     serv.getAll(( err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || 'Ocurrió un error al tratar de mostrar las servegorias.'
            });
        else res.send(data);
    });
};

//ACTUALIZAR servUCTOS
exports.update = (req, res) => {
    
    if (!req.body) {
      res.status(400).send({
        message: "El contenido no puede estar vacio!"
      });
    }
  
    serv.updateById(
      req.params.customerId,
      new Customer(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `No se encuntra una servegoria con el siguiente id ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Error al tratar de actualizar una servegoria con el siguiente id " + req.params.customerId
            });
          }
        } else res.send(data);
      }
    );
  };

//ELIMINAR UN servUCTO
exports.delete = (req, res) => {
    serv.remove(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No se encuntra una servegoria con el siguiente id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error al tratar de eliminar una servegoria con el siguiente i " + req.params.customerId
          });
        }
      } else res.send({ message: `Customer was deleted successfully!` });
    });
  };


//ELIMINAR TODOS LOS servUCTOS
exports.deleteAll = (req, res) => {
    serv.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocurrio un error al tratar de eliminar todas las servegorias."
        });
      else res.send({ message: `Todas las servegorias fueron eliminadas correctamente!` });
    });
  };