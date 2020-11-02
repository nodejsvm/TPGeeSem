const sql = require('./db.js');

const Prod = function(prod){
  this.idProd = prod.idProd;
  this.nombre = prod.nombre,
  this.estado = prod.estado,
  this.precio = prod.precio,
  this.descripcion = prod.descripcion
  this.idCat = prod.idCat
  this.url = prod.url
};

//Crear nueva Producto
Prod.Create = (newProd, result) => {
  sql.query(`INSERT INTO Producto (nombre, estado, descripcion, precio, idCat, url) values ('${newProd.nombre}', '${newProd.estado}', '${newProd.descripcion}', ${newProd.precio}, ${newProd.idCat}, '${newProd.url}')`, (err, res) => {
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
Prod.findById = (ProdId, result) => {
  sql.query(`SELECT * FROM Producto WHERE idProd = ${ProdId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("Se encontro el siguiente producto: ", res[0]);
      result(null, res[0]);
      return;
    }

    // No se encontro el dato por el ID
    result({ kind: "Id no encontrado" }, null);
  });
};

//Obtener todos los datos de las producto
Prod.getAll = result => {
  sql.query("SELECT * FROM Producto", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }

    console.log("Producto: ", res);
    result(null, res);
  });
};

//ACTUALIZAR EL PRODUCTO POR EL ID
Prod.updateById = (idProd, prod, result) => {
  console.log("hola: ", idProd, prod);
  sql.query(
    `UPDATE Producto SET nombre = ?, estado = ? , descripcion = ?, precio = ?, idCat = ?, url = ? WHERE idProd = ?`,
    [prod.nombre, prod.estado, prod.descripcion, prod.precio, prod.idCat, prod.url, prod.idProd],
    (err, res) => {
      if (err) {
        console.log("Error: ", err);          
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        result({ kind: "No se encontro producto para actualizar" }, null);
        return;
      }

      console.log("Se actualizo el producto con id: ", idProd);
      result(null, res);
    }
  );
};

//ELIMINAR UN Producto
Prod.remove = (idProd, result) => {
  sql.query("DELETE FROM Producto WHERE idProd = ?", idProd, (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "Id para eliminar no encontrado" }, null);
      return;
    }

    console.log("Se elimino el producto con id: ", idProd);
    result(null, res);
  });
};


//ELIMINAR TODOS LOS Productos

Prod.removeAll = result => {
  sql.query("DELETE FROM Producto", (err, res) => {
    if (err) {
      console.log("Error: ", err);
      result(null, err);
      return;
    }

    console.log(`Eliminado ${res.affectedRows} Producto`);
    result(null, res);
  });
};

module.exports = Prod;
