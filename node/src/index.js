
const cosa=require("./conexion");
var conn=cosa.conexion();

const express = require('express');
const morgan=require('morgan');


const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.listen(app.get('port'),()=>{
    console.log(`Server listening on port ${app.get('port')}`);
});


const usu=require("./usuariosBBDD").usuario;
app.get("/usuarios",(req,res)=>usu(req,res,conn));

const usuId=require("./usuariosBBDD").idUsu;
app.get("/usuariosId",(req,res)=>usuId(req,res,conn));

const VehIdUsu=require("./vehiculosBBDD").vehIdUsu;
app.get("/vehiculosUsuId",(req,res)=>VehIdUsu(req,res,conn));

const vehId=require("./vehiculosBBDD").idVeh;
app.get("/vehiculosId",(req,res)=>vehId(req,res,conn));

const servIdV=require("./serviciosBBDD").serviciosIdVeh;
app.get("/serviciosVehi",(req,res)=>servIdV(req,res,conn));

const servId=require("./serviciosBBDD").serviciosIdServ;
app.get("/serviciosId",(req,res)=>servId(req,res,conn));


const updateUsu=require("./usuariosBBDD.js").updateUsu;
app.get("/modificar_usuario",(req,res)=>updateUsu(req,res,conn));

const insertUsu=require("./usuariosBBDD.js").insertUsu;
app.get("/crear_usuario",(req,res)=>insertUsu(req,res,conn));

const deleteUsu=require("./usuariosBBDD.js").deleteUsu;
app.get("/borrar_usuario",(req,res)=>deleteUsu(req,res,conn));


const updateVeh=require("./vehiculosBBDD.js").updateVehi;
app.get("/modificar_vehiculo",(req,res)=>updateVeh(req,res,conn));

const insertVeh=require("./vehiculosBBDD.js").insertVehi;
app.get("/crear_vehiculo",(req,res)=>insertVeh(req,res,conn));

const deleteVeh=require("./vehiculosBBDD.js").deleteVehi;
app.get("/borrar_vehiculo",(req,res)=>deleteVeh(req,res,conn));


const updateServ=require("./serviciosBBDD.js").updateServ;
app.get("/modificar_servicio",(req,res)=>updateServ(req,res,conn));

const insertServ=require("./serviciosBBDD.js").insertServ;
app.get("/crear_servicio",(req,res)=>insertServ(req,res,conn));

const deleteServ=require("./serviciosBBDD.js").deleteServ;
app.get("/borrar_servicio",(req,res)=>deleteServ(req,res,conn));


const vehiUsu=require("./usuariosBBDD.js").vehiUsu;
app.get("/usuarioVehi",(req,res)=>vehiUsu(req,res,conn));

const servVehi=require("./vehiculosBBDD.js").servVehi;
app.get("/vehiculosServ",(req,res)=>servVehi(req,res,conn));
