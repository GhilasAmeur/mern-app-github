const express = require("express");
const route = express.Router();
const contrrollerUsers = require("../controllers/usersController");

//const User = require("../models/user.model");

//recupérer tout les users ('/')
route.get("/", contrrollerUsers.getUsers);

//ajouter a la base de données un user
route.post("/add", contrrollerUsers.addUser);

//recuperer un seul user :
//route.get("/:id", contrrollerUsers.getUser)

module.exports = route;
