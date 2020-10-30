const sql = require('./db.js');

const Service = function(serv){
  this.nombre = serv.nombre,
  this.estado = serv.estado,
  this.precio = serv.precio,
  this.descripcion = serv.descripcion
  this.idCat = serv.idCat
  this.url = serv.url
};

//Crear nueva Servicio
Service.Create = (newService, result) => {
  sql.query(`INSERT INTO Servicio (nombre, estado, descripcion, precio, idCat, url) values ('${newService.nombre}', '${newService.estado}', '${newService.descripcion}', ${newService.precio}, ${newService.idCat}, '${newService.url}')`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    else{
      console.log(res);
      result(null, res);
      return;
    }
  });
};


//Buscar por ID
Service.findById = (ServiceId, result) => {
  sql.query(`SELECT * FROM Servicio WHERE id = ${ServiceId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Se encontro el siguiente Servicio: ", res[0]);
      result(null, res[0]);
      return;
    }

    // No se encontro el dato por el ID
    result({ kind: "Id no encontrado" }, null);
  });
};

//Obtener todos los datos del Servicio
Service.getAll = result => {
  sql.query("SELECT * FROM Servicio", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }

    console.log("Servicio: ", res);
    result(null, res);
  });
};

//ACTUALIZAR EL Servicio POR EL ID
Service.updateById = (id, Service, result) => {
  sql.query(
    "UPDATE Servicio SET email = ?, name = ?, active = ? WHERE id = ?",
    [Service.nombre, categ.estado, Service.precio, Service.detalle, id],
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "No se encotro servicio para actualizar" }, null);
        return;
      }

      console.log("Servicio actualizado: ", { id: id, ...categ });
      result(null, { id: id, ...categ });
    }
  );
};

//ELIMINAR UN Servicio
Service.remove = (idServ, result) => {
  sql.query("DELETE FROM Servicio WHERE idServ = ?", idServ, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "Id para eliminar no encontrado" }, null);
      return;
    }

    console.log("Se elimino el Servicio con id: ", id);
    result(null, res);
  });
};


//ELIMINAR TODOS LOS Servicio

Service.removeAll = result => {
  sql.query("DELETE FROM Servicio", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }

    console.log(`Eliminado ${res.affectedRows} Servicio`);
    result(null, res);
  });
};

module.exports = Service;
