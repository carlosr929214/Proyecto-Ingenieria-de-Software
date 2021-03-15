const User = require('../models/user');
const Producto = require('../models/producto');
const Categoria = require('../models/categoria');
const Denuncia = require('../models/denuncia');
const Administrador = require('../models/administrador');
const Departamento = require('../models/departamento');
const Municipio = require('../models/municipio');
const Persona = require('../models/persona');
const Servicio = require('../models/servicio');
const Publicacion = require('../models/publicacion');




//RELACION PRODUCTO - USUARIO ( Un usuario tiene muchos productos)
User.hasMany(Producto);

Producto.belongsTo(User);
//RELACION CATEGORIA - PRODUCTO (una categoria tiene muchos productos)
Producto.belongsTo(Categoria);

Categoria.hasMany(Producto);

//RELACION PERSONA A USER

Persona.hasOne(User);

//RELACION PERSONA A ADMINISTRADOR

Persona.hasOne(Administrador);

//RELACION USUARIO A DENUNCIA

User.hasMany(Denuncia);

Denuncia.belongsTo(User);
//RELACION USUARIO A PUBLICACION

User.hasMany(Publicacion);

Publicacion.belongsTo(User);

//RELACION ADMINISTRADOR

Administrador.hasMany(Servicio);

Servicio.belongsTo(Administrador);

//PRODUCTO A DEPARTAMENTO

Producto.hasMany(Departamento);

Departamento.belongsTo(Producto);

// DEPARTAMENTO A MUNICIPIO 

Departamento.hasMany(Municipio);

Municipio.belongsTo(Departamento);



