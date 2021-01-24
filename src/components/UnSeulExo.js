import React, { Component } from "react";
import { Link } from "react-router-dom";
class UsSeulExo extends Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <tbody>
        <tr>
          <th scope="row">{this.props.exo.username}</th>
          <td>{this.props.exo.description}</td>
          <td>{this.props.exo.duration}</td>
          <td>{this.props.exo.date.substring(0, 10)}</td>
          <td>
            <Link
              to={"/edit/" + this.props.exo._id}
              className="btn btn-success mr-2 "
            >
              Edit
            </Link>
            <span
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.exo._id)}
            >
              Delete
            </span>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default UsSeulExo;
