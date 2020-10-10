const sql = require('./db.js');

//constructor

const prod = function(prod){
    
};

prod.getAll = result => {
    sql.query("SELECT * FROM Producto", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Usuario: ", res);
      result(null, res);
    });
  };

module.exports = prod;
