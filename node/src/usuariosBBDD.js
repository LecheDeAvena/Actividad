const usuario = (req,res,conn) => {
    let sql = "SELECT * from usuario";
    
    conn.query(sql, function (err, result) {
        if (err) throw err;
        return res.json(result);

    });
}

exports.usuario=usuario;

const idUsu = (req,res,conn) => {
    const idUsu = req.query.idUsu;
    let sql = "SELECT * from usuario where id_usu =" + idUsu;

    conn.query(sql, function (err, result,fields) {
        if(err){
            res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
        } else {
            res.send(result);
        }

    });
}

exports.idUsu=idUsu;

const updateUsu = async (req, res, conn) => {

    const idUsu = req.params.id;

    const {login, dni, pass, admin} = req.body;

    const result = req.body;

    let sql = "UPDATE usuarios SET login = '${login}', pass = '${await encriptar.hash(pass, 8)}', admin = '${admin}' where id_usu = ${id_usu}";

    conn.query(sql, err => {
        if (err) throw err;

        res.json(result);
    });
}
exports.updateUsu = updateUsu;

const insertUsu = (req,res,conn) => {
    
    let sql = "insert into usuario";

    conn.query(sql, function (err, result,fields) {
        if(err){
            res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
        } else {
            res.send(result);
        }

    });
}

exports.insertUsu=insertUsu;

const deleteUsu = (req,res,conn) => {
    const idUsu = req.query.idUsu;
    let sql = "delete from usuario where id_usu=" + idUsu;

    conn.query(sql, function (err, result,fields) {
        if(err){
            res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
        } else {
            res.send(result);
        }

    });
}

exports.deleteUsu=deleteUsu;

const vehiUsu = (req,res,conn) => {
    const idUsu = req.query.idUsu;
    let sql = "select u.*, v.* from usuario u join vehiculos v on u.id_usu=v.id_usu where u.id_usu=" + idUsu;

    conn.query(sql, function (err, result,fields) {
        if(err){
            res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
        } else {
            res.send(result);
        }

    });
}

exports.vehiUsu=vehiUsu;