const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const usersRouter = require("./routes/usersRoute");
const exercisesRouter = require("./routes/exercisesRoute");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const url = process.env.ATLAS_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDB  connécté avec succès.");
});
//j ajouter ca du net car avant j'avais un warning !!
mongoose.set("useCreateIndex", true);

app.use("/users", usersRouter);
app.use("/exercises", exercisesRouter);

app.listen(port, () => console.log(`Serveur écoute sur port ${port}.`));
