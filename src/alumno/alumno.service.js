const { response } = require("express");
const { connection } = require("../common/conexion");


const find = (req, res = response) => {
  //hacer query para buscar todos
 connection.query("select * from alumno where correo = ? and clave = ?",
 [req.query.correo, req.query.clave],
 function(error, results, fields){
    (error)
    ? res.json(error)
    : res.json(results)
 });
};

const findOne = (req, res = response) => {
  connection.query("select * from alumno where id_alumno = ?",
  [req.params.id],
  function(error, results, fields){
    (error)
    ? res.json(error)
    : res.json(results)
  });
};

const create = (req, res = response) => {
  //hacer query para crear uno
  connection.query(`insert into alumno (nombre,
    correo,
    clave) values (?, ?, ?) `,
  [req.body.nombre, req.body.correo, req.body.clave],
  function(error, results, fields){
    (error)
    ? res.json(error)
    : res.json(results)
  });
};

const update = (req, res = response) => {
  //hacer query para actualizar uno
  connection.query("update alumno set nombre = ?, correo = ?, clave = ?  where id_alumno = ?",
  [req.query.nombre, req.query.correo, req.query.clave, req.params.id],
  function(error, results, fields){
    (error)
    ? res.json(error)
    : res.json(results)
  });
};

const remove = (req, res = response) => {
  //hacer query para remover uno
  connection.query("delete from alumno where id_alumno = ?",
  [req.params.id],
  function(error, results, fields){
    (error)
    ? res.json(error)
    : res.json(results)
  });
};

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
}