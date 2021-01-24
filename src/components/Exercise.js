import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Exercise extends Component {
  constructor(props) {
    super(props);
    // console.log("exercise ya zehhhh");
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      succes: "",
    };
  }

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  onChangeDuration = (event) => {
    this.setState({
      duration: event.target.value,
    });
  };

  onChangeDate = (date) => {
    this.setState({
      date: date,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log("okokokokokk");
    const newExercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(newExercise);
    axios.post("http://localhost:5000/exercises/add", newExercise).then((res) =>
      this.setState({
        succes: res.data,
      })
    );
    // window.location("/");
  };

  render() {
    //console.log("exercise ya zehhhh");
    return (
      <div className="container">
        <h1>Ajouter un exercice</h1>
        <form className="needs-validation" onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="prenom">Username</label>
              <input
                type="text"
                className="form-control"
                id="prenom"
                placeholder="Exercice..."
                onChange={this.onChangeUsername}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="nom">Description</label>
              <input
                type="text"
                className="form-control"
                id="nom"
                placeholder="Petite description..."
                onChange={this.onChangeDescription}
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="pseudo">Duration</label>
              <input
                type="text"
                className="form-control"
                id="pseudo"
                onChange={this.onChangeDuration}
                placeholder="Minutes..."
                required
              />
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="pseudo">
                Date<span> (facultatif)</span>
              </label>
              <div>
                <DatePicker
                  className="form-control"
                  // type="date"
                  //className="form-control"
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                  // id="pseudo"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-row"></div>

          <button className="btn btn-primary" type="submit">
            Envoyer
          </button>
          <div className="alert alert-success">{this.state.succes}</div>
        </form>
      </div>
    );
  }
}

export default Exercise;
