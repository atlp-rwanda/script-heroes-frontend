import React, { Component } from "react";
import { Table, Form, FormGroup,Alert } from "reactstrap";
import "../style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchRequest } from "../../../../redux/actions/requests/userRequests";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

class Trip extends Component {
  componentDidMount() {
    this.props.fetchRequest(this.props.match.params.id);
  }
  render() {
    const { isLoading, Trip, error, Accomodation } = this.props;
    const loader = isLoading ? "" : "none";
    const err =
      error != null ? (
        <Alert color="danger">{error}</Alert>
      ) : null;
    const accomodation =
      Accomodation != null ? (
        <div className="_accomodation">
          <h4>Accommodation</h4>
          <Table className="table-hover">
            <thead>
              <tr>
                <th>Facility Name</th>
                <th>Location</th>
                <th>Services</th>
                <th>Amenities</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{Trip.Accomodation.facilityName}</td>
                <td>
                  {Accomodation.Location.country}, {Accomodation.Location.city}
                </td>
                <td>{Trip.Accomodation.services}</td>
                <td>{Trip.Accomodation.amenities}</td>
                <td>{Trip.Accomodation.price}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      ) : null;

    const trip =
      Trip != null ? (
        <div className="_request">
          <h4>Request</h4>
          <Table className="table-hover text-align-center">
            <thead>
              <tr>
                <th>Travel Reason</th>
                <th>From</th>
                <th>Till</th>
                <th>Origin</th>
                <th>Destination</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{Trip.travelReasons}</td>
                <td>{Trip.from}</td>
                <td>{Trip.till}</td>
                <td>
                  {Trip.Origin.country}, {Trip.Origin.city}
                </td>
                <td>
                  {Trip.Destination.country}, {Trip.Destination.city}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      ) : null;
    return (
      <div className="requests">
        <div className="side-bar">
          <div className="search-bar">
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
          <Link className="getall" to={"/requests"}>
            <FontAwesomeIcon icon={faList} /> View All Requests
          </Link>
        </div>
        <div className="requests-wrapper ${  }`}>">
          <div className="single-request">
            <span style={{ display: `${loader}` }} className="pre-loader">
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </span>
            {trip}
            {accomodation}
            {err}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    message: state.userRequest.message,
    Trip: state.userRequest.Trip,
    Accomodation: state.userRequest.Accomodation,
    error: state.userRequest.error,
    isLoading: state.userRequest.isLoading,
  };
};
export default connect(mapStateToProps, { fetchRequest })(Trip);
