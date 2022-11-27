const express = require('express');
const alumno = express.Router();
const { findOne, find, create, update, remove } = require("./alumno.service");

alumno.use(function timeLog(req,res,next){
    next();
});


alumno.get(
    "/",
    find
);

alumno.get(
    "/:id",
    findOne
);

alumno.post(
    "/",
    create
);

alumno.put(
    "/:id",
    update
);

alumno.delete(
    "/:id",
    remove
);


module.exports ={
    alumno
};