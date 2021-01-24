const User = require("../models/user.model");

exports.getUsers = (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Err", err));
};

exports.addUser = (req, res) => {
  //console.log(req.body);
  const username = req.body.username;
  const newUser = new User({ username });
  console.log(newUser);
  newUser
    .save()
    .then(() =>
      res.json(`L\'utulisateur ${newUser.username} est ajouter avec succès !`)
    )
    .catch((err) =>
      res.status(400).json("Erreur de l'ajout de cet utilisateur :" + err)
    );
};

// exports.getUser = (req, res) =>{

//     const id = req.params.id ;

// }
