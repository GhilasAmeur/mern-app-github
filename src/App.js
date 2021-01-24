import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import ExercisesListe from "./components/ExercisesListe";
import Exercise from "./components/Exercise";
import Users from "./components/Users";
import EditExercise from "./components/EditExercise";

function App() {
  return (
    <Router>
      <div className="container-fluid my-2">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ExercisesListe} />
          <Route path="/exercises" component={Exercise} />
          <Route path="/users" component={Users} />
          <Route path="/edit/:id" component={EditExercise} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
