import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Table, Form, FormGroup, Alert } from "reactstrap";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchRequests } from "../../../../redux/actions/requests/userRequests";
import "../style.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

class Trips extends Component {
  componentDidMount() {
    this.props.fetchRequests();
  }
  render() {
    const { isLoading, error, trips } = this.props;
    const loader = isLoading ? "" : "none";
    const showTable = isLoading || error != null ? "none" : "";
    const err = error != null ? <Alert color="danger">{error}</Alert> : null;

    const tripsList = trips.length
      ? trips.map((trip) => {
          return (
            <tr key={trip.id}>
              <td>{new Date(trip.createdAt).toISOString().slice(0, 10)}</td>
              <td className="reason">{trip.Request.RequestType.type}</td>
              <td>{trip.Request.reason}</td>
              <td>{trip.Request.status}</td>
              <td className=" td-actions">
                <Link className="" to={"/requests/" + trip.id}>
                  {" "}
                  <Button className="view  bg-primary">
                    <FontAwesomeIcon icon={faEye} />
                  </Button>{" "}
                </Link>
                <Link to={"/requests/update/" + trip.id}>
                  <Button className="edit bg-success">
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </Link>
                <Button className="delete bg-danger">
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
              </td>
            </tr>
          );
        })
      : null;
    return (
      <div className="requests">
        <div className="side-bar">
          <div className="search-bar center-block">
            <Form inline>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0 search">
                <input
                  type="search"
                  placeholder="&#xf002;"
                  className="search-input"
                />
              </FormGroup>
            </Form>
          </div>
        </div>
        <div className="requests-wrapper">
          <span style={{ display: `${loader}` }} className="pre-loader">
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </span>
          {err}
          <Table style={{ display: `${showTable}` }} className="table-hover">
            <thead fixed="top">
              <tr>
                <th>Requested On</th>
                <th>Request Type</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-center">{tripsList}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    msg: state.userRequests.msg,
    trips: state.userRequests.trips,
    isLoading: state.userRequests.isLoading,
    error: state.userRequests.error,
  };
};
export default connect(mapStateToProps, { fetchRequests })(Trips);
