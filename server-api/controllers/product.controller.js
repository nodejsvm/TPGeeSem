const Prod = require('../models/product.model.js');
const Prod2 = require('../models/product.model.js');

//CREAR PRODUCTO
exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "El contenido no puede estar vacio!"
      });
    }

    Prod2.Create(req.body,(err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || 'Ocurrió un error al tratar de crear un Producto.'
        });
      else res.send(data);
    });
  };


//MOSTRAR SOLO UN PRODUCTO
exports.findOne = (req, res) => {
  Prod2.findById(req.params.productId, (err, data) => {
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
  Prod2.getAll(( err, data) => {
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

  Prod2.updateById(
    req.params.productId,
    new Prod(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No se encuntra un producto con el siguiente id ${req.params.productId}.`
          });
        } else {
          res.status(500).send({
            message: "Error al tratar de actualizar un producto con el siguiente id " + req.params.productId
          });
        }
      } 
      else{
        res.send(data);
        console.log("Producto actualizado correctamente.");
      } 
    }
  );
  };

//ELIMINAR UN PRODUCTO
exports.delete = (req, res) => {
  Prod2.remove(req.params.productId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No se encuntra un producto con el siguiente id ${req.params.productId}.`
          });
        } else {
          res.status(500).send({
            message: "Error al tratar de eliminar un producto con el siguiente id " + req.params.productId
          });
        }
      } 
      else res.send({ message: `Producto eliminado correctamente!` });
    });
  };


//ELIMINAR TODOS LOS PRODUCTOS
exports.deleteAll = (req, res) => {
  Prod2.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocurrio un error al tratar de eliminar todos los productos."
        });
      else res.send({ message: `Todas los productos fueron eliminadas correctamente!` });
    });
  };