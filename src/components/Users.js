import React, { Component } from "react";
import axios from "axios";
class Users extends Component {
  constructor(props) {
    super(props);
    // console.log("exercise ya zehhhh");
    this.state = {
      username: "",

      succes: "",
    };
  }

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log("okokokokokk");
    const newUser = {
      username: this.state.username,
    };
    //console.log(newUser);
    axios.post("http://localhost:5000/users/add", newUser).then((res) =>
      this.setState({
        succes: res.data,
        //username: " "
      })
    );
  };

  render() {
    //console.log("exercise ya zehhhh");
    return (
      <div className="container">
        <h1>Ajouter un nouveau utilisateur</h1>
        <form className="needs-validation" onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="prenom">Username</label>
              <input
                type="text"
                className="form-control"
                id="prenom"
                placeholder="Utulisateur..."
                onChange={this.onChangeUsername}
                required
              />
            </div>
          </div>

          <button className="btn btn-primary" type="submit">
            Envoyer
          </button>
          <div className="alert alert-success">{this.state.succes}</div>
        </form>
      </div>
    );
  }
}

export default Users;
