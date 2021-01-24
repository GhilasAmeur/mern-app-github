import React, { Component } from "react";
import axios from "axios";
//import DatePicker from "react-datepicker";

class EditExercise extends Component {
  constructor(props) {
    super(props);

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

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
        });
      })
      .catch((err) => console.log(err));
  }

  onSubmit = (e) => {
    e.preventDefault();
    const updateExercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(updateExercise);
    axios
      .post(
        "http://localhost:5000/exercises/update/" + this.props.match.params.id,
        updateExercise
      )
      .then((res) =>
        this.setState({
          // succes: res.data,
        })
      );
  };

  render() {
    console.log(this.props.match.params.id);
    return (
      <div className="container">
        <h1>Modifier l'exercice {this.state.username} </h1>
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
                placeholder="Minutes..."
                onChange={this.onChangeDuration}
                required
              />
            </div>
          </div>

          <button className="btn btn-primary" type="submit">
            Update
          </button>
          <div className="alert alert-success">{/*this.state.succes*/}</div>
        </form>
      </div>
    );
  }
}

export default EditExercise;
