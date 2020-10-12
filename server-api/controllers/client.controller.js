const client = require('../models/client.model.js');

//CREAR CATEGORIA
exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "El contenido no puede estar vacio!"
      });
    }

    cat.create(client, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || 'Ocurrió un error al tratar de crear un cliente.'
        });
      else res.send(data);
    });
  };


//MOSTRAR SOLO UNA clientes
exports.findOne = (req, res) => {
    client.findById(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No se encuntra un cliente con el siguiente id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error al tratar de recuperar un cliente con el siguiente id " + req.params.customerId
          });
        }
      } else res.send(data);
    });
  };

//MOSTRAR TODAS LAS clientes
exports.findAll = (req, res) => {
     client.getAll(( err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || 'Ocurrió un error al tratar de mostrar los clientes.'
            });
        else res.send(data);
    });
};

//ACTUALIZAR clientes
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "El contenido no puede estar vacio!"
      });
    }
  
    client.updateById(
      req.params.customerId,
      new Customer(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `No se encuntra un cliente con el siguiente id ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Error al tratar de actualizar un cliente con el siguiente id " + req.params.customerId
            });
          }
        } else res.send(data);
      }
    );
  };

//ELIMINAR UNA clientes
exports.delete = (req, res) => {
    client.remove(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No se encuntra un cliente con el siguiente id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error al tratar de eliminar un cliente con el siguiente i " + req.params.customerId
          });
        }
      } else res.send({ message: `Cliente eliminado correctamente!` });
    });
  };


//ELIMINAR TODAS LAS clientes
exports.deleteAll = (req, res) => {
    client.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocurrio un error al tratar de eliminar todas las clientes."
        });
      else res.send({ message: `Todas las categorias fueron eliminadas correctamente!` });
    });
  };