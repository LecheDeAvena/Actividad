const conexion=function(){
    var mysql = require('mysql');

    var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    pass: "",
    database: "arcoiris"
    });

    conn.connect(function(err) {
        if (err) throw err;
        console.log("Conectado");
    });
    
    return conn;
}

exports.conexion=conexion;