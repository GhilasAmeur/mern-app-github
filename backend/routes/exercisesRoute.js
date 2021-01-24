const express = require("express");
const route = express.Router();

const controllerExercise = require("../controllers/exercisesController");

route.get("/", controllerExercise.getExercises);
route.post("/add", controllerExercise.addExercise);
route.get("/:id", controllerExercise.getExerciseById);
route.delete("/:id", controllerExercise.deleteExercise);
route.post("/update/:id", controllerExercise.updateExercise);

module.exports = route;
