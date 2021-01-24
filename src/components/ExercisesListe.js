import React, { Component } from "react";
import axios from "axios";
import UnSeulExo from "../components/UnSeulExo";
class ExercisesListe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [],
      success: "",
    };
  }

  onDelete = (id) => {
    // console.log(id);
    //console.log(res.data)
    axios.delete(`http://localhost:5000/exercises/${id}`).then((res) =>
      this.setState({
        exercises: this.state.exercises.filter(
          (exercice) => exercice._id !== id
        ),
        success: res.data,
      })
    );
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises")
      .then((res) => {
        console.log(res);
        this.setState({
          exercises: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="list-group">
        <div className="container">
          <div className="aler alert-success">{this.state.success}</div>
          Listes des exercices
          <table className="table table-striped table-hover mt-2">
            <thead>
              <tr className="table-active">
                <th scope="col">Username</th>
                <th scope="col">Description</th>
                <th scope="col">Duration</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            {this.state.exercises.map((exercise, index) => (
              <UnSeulExo exo={exercise} key={index} onDelete={this.onDelete} />
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default ExercisesListe;
