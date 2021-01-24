const Exercise = require("../models/exercice.model");

//recuperer tous les exercices :
exports.getExercises = (req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Erreur :", err));
};

//ajouter un exercice :

exports.addExercise = (req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });
  newExercise
    .save()
    .then(() => res.send("Exercice ajouté avec succès."))
    .catch((err) => {
      //console.log(err);
      res.status(400).json("Erreur :" + err);
    });
};

//recuperer un seul exercice : avec id

exports.getExerciseById = (req, res) => {
  const id = req.params.id;
  Exercise.findById(id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Ereeur :" + err));
};

//supprimer un exercice :

exports.deleteExercise = (req, res) => {
  const id = req.params.id;
  Exercise.findByIdAndDelete(id)
    .then(() => res.json("Exercice supprimé avec succès !"))
    .catch((err) => res.status(400).json("Erreur :" + err));
};

//update un exercice :

exports.updateExercise = (req, res) => {
  const id = req.params.id;
  Exercise.findById(id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercice modifier avec succès."))
        .catch((err) =>
          res.status(400).json("Erreur de modificatin de l'exercice :", err)
        );
    })
    .catch((err) => res.status(400).json("Erreur: ", err));
};
