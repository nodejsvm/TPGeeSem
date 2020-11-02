const Service = require('../models/service.model.js');
const serv = require('../models/service.model.js');

//CREAR SERVICIO
exports.create = (req, res) => {

    if (!req.body) {
      res.status(400).send({
        message: "El contenido no puede estar vacio!"
      });
    }

    serv.Create(req.body, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || 'Ocurrió un error al tratar de crear un servicio.'
        });
      else res.send(data);
    });
  };

//MOSTRAR SOLO UN SERVICIO
exports.findOne = (req, res) => {
    serv.findById(req.params.servId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No se encuntra un servicio con el siguiente id ${req.params.servId}.`
          });
        } else {
          res.status(500).send({
            message: "Error al tratar de recuperar un servicio con el siguiente id " + req.params.servId
          });
        }
      } else res.send(data);
    });
  };

//MOSTRAR TODOS LOS SERVICIOS
exports.findAll = (req, res) => {
     serv.getAll(( err, data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || 'Ocurrió un error al tratar de mostrar los servicios.'
            });
        else res.send(data);
    });
};

//ACTUALIZAR SERVICIO
exports.update = (req, res) => {
    
    if (!req.body) {
      res.status(400).send({
        message: "El contenido no puede estar vacio!"
      });
    }
  
    serv.updateById(
      req.params.servId,
      new Service(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `No se encuntra un servicio con el siguiente id ${req.params.servId}.`
            });
          } else {
            res.status(500).send({
              message: "Error al tratar de actualizar un servicio con el siguiente id " + req.params.servId
            });
          }
        } 
        else{
          res.send(data);
          console.log("Servicio actualizado correctamente.");
        } 
      }
    );
  };

//ELIMINAR UN SERVICIO
exports.delete= (req, res) => {
    serv.remove(req.params.servId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `No se encuntra un servicio con el siguiente id ${req.params.servId}.`
          });
        } else {
          res.status(500).send({
            message: "Error al tratar de eliminar una servicio con el siguiente id " + req.params.servId
          });
        }
      } else res.send({ message: `Servicio eliminado correctamente!`});
    });
  };


//ELIMINAR TODOS LOS SERVICIOS
exports.deleteAll = (req, res) => {
    serv.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Ocurrio un error al tratar de eliminar todas las servicios."
        });
      else res.send({ message: `Todos los servicios fueron eliminadas correctamente!` });
    });
  };