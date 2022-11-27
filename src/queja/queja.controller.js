const express = require("express");
const queja = express.Router();
const { findOne, find, create, update, remove } = require("./queja.service");

queja.use(function timeLog(req,res,next){
    next();
});


queja.get(
    "/",
    find
);
queja.get(
    "/:id",
    findOne
);

queja.post(
    "/",
    create
);

queja.put(
    "/:id",
    update
);

queja.delete(
    "/:id",
    remove
);


module.exports ={
    queja
};