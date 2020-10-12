const sql = require('./db.js');


const Category = function(cate) {
    this.idcategory = cate.idcat;
    this.name = cate.name;
    this.detail  = cate.detalle;
    this.state = cate.estado
};

//Crear nueva categoria
Category.Create = (newCategory, result) => {
    sql.query("INSERT INTO Categoria SET ?", newCategory, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Categoria creada: ", { id: res.insertId, ...newCategory });
      result(null, { id: res.insertId, ...newCategory });
    });
};

//Buscar por ID
Category.findById = (categoryId, result) => {
    sql.query(`SELECT * FROM Categoria WHERE id = ${categoryId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Se encontro la siguiente categoria: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // No se encontro el dato por el ID
      result({ kind: "Id no encontrado" }, null);
    });
};

//Obtener todos los datos de las categorias
Category.getAll = result => {
    sql.query("SELECT * FROM Categoria", (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Categoria: ", res);
      result(null, res);
    });
};

//ACTUALIZAR LA CATEGORIA POR EL ID
Category.updateById = (id, categ, result) => {
    sql.query(
      "UPDATE Categoria SET email = ?, name = ?, active = ? WHERE id = ?",
      [categ.nombre, categ.detalle, categ.estado, id],
      (err, res) => {
        if (err) {
          console.log("Error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Customer with the id
          result({ kind: "No se encotro categoria para actualizar" }, null);
          return;
        }
  
        console.log("Categoria actualizada: ", { id: id, ...categ });
        result(null, { id: id, ...categ });
      }
    );
};

//ELIMINAR UN CLIENTE
Category.remove = (idcate, result) => {
    sql.query("DELETE FROM Categoria WHERE id = ?", idcate, (err, res) => {
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
  
      console.log("Se elimino la categoria con id: ", id);
      result(null, res);
    });
};


//ELIMINAR TODOS LOS CLIENTES

Category.removeAll = result => {
    sql.query("DELETE FROM Categoria", (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`Eliminado ${res.affectedRows} Categoria`);
      result(null, res);
    });
};

module.exports = Category;
