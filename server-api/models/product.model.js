const sql = require('./db.js');

const Prod = function(prod){
    this.idProd = prod.idProd,
    this.nombre = prod.nombre,
    this.estado = prod.estado,
    this.precio = prod.precio,
    this.descripcion = prod.descripcion
    this.idCat = prod.idCat
};

//Crear nueva Producto
Prod.create = (newProd, result) => {
  sql.query("INSERT INTO Producto", newProd.idProd,newProd.nombre, newProd.estado, newProd.descripcion, newProd.precio, newProd.idCat, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Producto creado: ", { id: res.insertId, ...newProd });
    result(null, { id: res.insertId, ...newProd });
  });
};

//Buscar por ID
Prod.findById = (ProdId, result) => {
  sql.query(`SELECT * FROM Producto WHERE id = ${ProdId}`, (err, res) => {
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
Prod.updateById = (id, prod, result) => {
  sql.query(
    "UPDATE Producto SET nombre = ?, estado = ?, precio = ?, descripcion = ? WHERE id = ?",
    [prod.nombre, categ.estado, prod.precio, prod.detalle, id],
    (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "No se encotro producto para actualizar" }, null);
        return;
      }

      console.log("Producto actualizado: ", { id: id, ...categ });
      result(null, { id: id, ...categ });
    }
  );
};

//ELIMINAR UN Producto
Prod.remove = (idProd, result) => {
  sql.query("DELETE FROM Producto WHERE id = ?", idProd, (err, res) => {
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

    console.log("Se elimino el producto con id: ", id);
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
