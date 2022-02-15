const serviciosIdVeh = (req,res,conn) => {
    const id_veh = req.query.idVehi;
    let sql = "SELECT * from servicios where id_veh =" + id_veh;

    conn.query(sql, function (err, result,fields) {
        if(err){
            res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
        } else {
            res.send(result);
        }

    });
}

exports.serviciosIdVeh=serviciosIdVeh;

const serviciosIdServ = (req,res,conn) => {
    const idSer = req.query.idSer;
    let sql = "SELECT * from servicios where id_ser =" + idSer;

    conn.query(sql, function (err, result,fields) {
        if(err){
            res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
        } else {
            res.send(result);
        }

    });
}

exports.serviciosIdServ=serviciosIdServ;

const updateServ = (req,res,conn) => {
    const idSer = req.query.idSer;
    let sql = "update servicios set ? where id_ser =" + idSer;

    var fecha=req.body.fecha;
    var km=req.body.km;
    var descrip=req.body.descrip;

    conn.query(sql, function (err, result,fields) {
        if(err){
            res.send(JSON.stringify({"status": 500, "error": err, "response": null}));
        } else {
            res.send(result);
        }

    });
}
