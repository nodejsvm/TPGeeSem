const prod = require('../models/product.model.js');

//CREAR PRODUCTO
exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }

    prod.create(req.body,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || 'Ocurrió un error al tratar de crear un producto.'
        });
      else res.send(data);
    });
  };


//MOSTRAR SOLO UN PRODUCTO
exports.findOne = (req, res) => {
    prod.findById(req.params.productId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No se encuntra una prodegoria con el siguiente id ${req.params.productId}.`
          });
        } else {
          res.status(500).send({
            message: "Error al tratar de recuperar prodegoria con el siguiente id " + req.params.productId
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

//ACTUALIZAR UN PRODUCTO
exports.update = (req, res) => {
    
    if (!req.body) {
      res.status(400).send({
        message: "El contenido no puede estar vacio!"
      });
    }
  
    prod.updateById(
      req.params.productId,
      new Customer(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `No se encuntra un producto con el siguiente id ${req.params.customerId}.`
            });
          } else {
            res.status(500).send({
              message: "Error al tratar de actualizar un producto con el siguiente id " + req.params.customerId
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
            message: `No se encuntra un producto con el siguiente id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error al tratar de eliminar un producto con el siguiente i " + req.params.customerId
          });
        }
      } else res.send({ message: `Producto eliminado correctamente!` });
    });
  };


//ELIMINAR TODOS LOS PRODUCTOS
exports.deleteAll = (req, res) => {
    prod.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocurrio un error al tratar de eliminar todos los productos."
        });
      else res.send({ message: `Todas los productos fueron eliminadas correctamente!` });
    });
  };