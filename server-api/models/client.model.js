const sql = require('./db.js');


const Client= function(cli) {
    this.idClient = cli.idcat;
    this.name = cli.name;
    this.apellido = cli.apellido;
    this.celular = cli.celular;
    this.estado = cli.estado
};

//Crear nuevo cliente
Client.Create = (newClient, result) => {
    sql.query("INSERT INTO Cliente SET ?", newClient, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Cliente creado: ", { id: res.insertId, ...newClient });
      result(null, { id: res.insertId, ...newClient });
    });
};

//Buscar cliente por ID
Client.findById = (ClientId, result) => {
    sql.query(`SELECT * FROM Cliente WHERE id = ${ClientId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Se encontro el siguiente cliente: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // No se encontro el dato por el ID
      result({ kind: "Id no encontrado" }, null);
    });
};

//Obtener todos los datos de los clientes
Client.getAll = result => {
    sql.query("SELECT * FROM Cliente", (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Cliete: ", res);
      result(null, res);
    });
};

//ACTUALIZAR EL CLIENTE POR EL ID
Client.updateById = (id, clien, result) => {
    sql.query(
      "UPDATE Cliente SET email = ?, name = ?, active = ? WHERE id = ?",
      [clien.nombre, clien.apellido, clien.celular, clien.estado,id],
      (err, res) => {
        if (err) {
          console.log("Error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Customer with the id
          result({ kind: "No se encotro cliente para actualizar" }, null);
          return;
        }
  
        console.log("Cliente actualizado: ", { id: id, ...categ });
        result(null, { id: id, ...categ });
      }
    );
};

//ELIMINAR UN CLIENTE
Client.remove = (idClien, result) => {
    sql.query("DELETE FROM Cliente WHERE id = ?", idClien, (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "Id para eliminar no encontrado" }, null);
        return;
      }
  
      console.log("Se elimino el cliente con id: ", id);
      result(null, res);
    });
};


//ELIMINAR TODOS LOS CLIENTES

Client.removeAll = result => {
    sql.query("DELETE FROM Cliente", (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`Eliminado ${res.affectedRows} Cliente`);
      result(null, res);
    });
};

module.exports = Client;
