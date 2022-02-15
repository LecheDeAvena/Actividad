const vehIdUsu = (req,res,conn) => {
    const idUsu = req.query.idUsu;
    let sql = "SELECT * from vehiculos where id_usu =" + idUsu;

    conn.query(sql, function (err, result,fields) {
        if(err){
            res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
        } else {
            res.send(result);
        }

    });
}

exports.vehIdUsu=vehIdUsu;

const idVeh = (req,res,conn) => {
    const idVehi = req.query.idVehi;
    let sql = "SELECT * from vehiculos where id_veh =" + idVehi;

    conn.query(sql, function (err, result,fields) {
        if(err){
            res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
        } else {
            res.send(result);
        }

    });
}

exports.idVeh=idVeh;

const updateVehi = (req,res,conn) => {
    const idVehi = req.query.idVehi;
    let sql = "update vehiculos set ? where id_veh =" + idVehi;

    let vehiculos= {
        marca: req.body.marca,
        modelo: req.body.modelo,
        matricula: req.body.matricula
    }

    conn.query(sql, vehiculos, function (err, result,fields) {
        if(err){
            res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
        } else {
            res.send(result);
        }

    });
}

exports.updateVehi=updateVehi;

const insertVehi = (req,res,conn) => {
    
    let sql = "insert into vehiculos";

    conn.query(sql, function (err, result,fields) {
        if(err){
            res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
        } else {
            res.send(result);
        }

    });
}

exports.insertVehi=insertVehi;

const deleteVehi = (req,res,conn) => {
    const idVehi= req.query.idVehi;
    let sql = "delete from vehiculos where id_veh=" + idVehi;

    conn.query(sql, function (err, result,fields) {
        if(err){
            res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
        } else {
            res.send(result);
        }

    });
}

exports.deleteVehi=deleteVehi;

const servVehi = (req,res,conn) => {
    const id_usu= req.query.id_usu;
    let sql = "select v.*, s.* from vehiculos v join servicios s on v.id_veh=s.id_veh where v.id_usu=" + id_usu;

    conn.query(sql, function (err, result,fields) {
        if(err){
            res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
        } else {
            res.send(result);
        }

    });
}

exports.servVehi=servVehi;