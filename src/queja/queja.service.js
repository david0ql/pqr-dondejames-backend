const { response } = require("express");
const { connection } = require("../common/conexion");


const find = (req, res = response) => {
  //hacer query para buscar todos
 connection.query("select * from queja",
 [],
 function(error, results, fields){
    (error)
    ? res.json(error)
    : res.json(results)
 });
};

const findOne = (req, res = response) => {
  connection.query("select * from queja where id_queja = ?",
  [req.params.id],
  function(error, results, fields){
    (error)
    ? res.json(error)
    : res.json(results)
  });
};

const create = (req, res = response) => {
  //hacer query para crear uno
  connection.query(`insert into queja (descripcion,
     nombre_alumno) values (?, ?) `,
  [req.query.descripcion, req.query.nombre_alumno],
  function(error, results, fields){
    (error)
    ? res.json(error)
    : res.json(results)
  });
};

const update = (req, res = response) => {
  //hacer query para actualizar uno
  connection.query("update queja set  descripcion = ?, nombre_alumno = ? where id_queja = ?",
  [req.query.descripcion, req.query.nombre_alumno, req.params.id],
  function(error, results, fields){
    (error)
    ? res.json(error)
    : res.json(results)
  });
};

const remove = (req, res = response) => {
  //hacer query para remover uno
  connection.query("delete from queja where id_queja = ?",
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