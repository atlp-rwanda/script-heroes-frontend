import React, { useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import "./requests.scss";
import loading from "../../../assets/loading.gif";

import { Row, Col, Table, Container } from "reactstrap";
import { adminRequests } from "../../../../redux/actions/adminRequests";
import Alert from "../../commons/Alert";
// import Navigation from '../../Navigation'
import Footer from "../../Footer";
import RequestsDecision from "./RequestsDecision";
import Pagination from "./Pagination";

const AdminRequests = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    props.adminRequests();
  }, []);
  const REQUESTS_PER_PAGE = 6;

  const requestsData = useMemo(() => {
    let computedRequests = props.requests;

    return computedRequests.slice(
      (currentPage - 1) * REQUESTS_PER_PAGE,
      (currentPage - 1) * REQUESTS_PER_PAGE + REQUESTS_PER_PAGE
    );
  }, [props.requests, currentPage]);

  const { isLoading } = props;
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  if (isLoading) {
    return (
      <div className="loading">
        <img src={loading} alt="loading" className="loader" />
      </div>
    );
  }

  return (
    <div data-testid="requests-a" className="requests-a">
      <div className="admin-req">
        <div className="requests-intro">
          <input
            type="search"
            placeholder="&#xf002;"
            className="search-input"
          />
          <h1>All Requests</h1>
        </div>
        <div className="admin-requests">
          <h1>All Requests</h1>

          {requestsData.length === 0 ? (
            <div className="table-cover">
              <Alert
                message={props.error || "No requests to show"}
                isOpen={true}
                color={"danger"}
              />
            </div>
          ) : (
            <div className="table-cover">
              <Table responsive className="req-table">
                <thead>
                  <tr>
                    <th>Requester</th>
                    <th>Request&nbsp;Type</th>
                    <th>Requested&nbsp;On</th>
                    <th>Reason</th>
                    <th>Status</th>
                    <th>Decision</th>
                  </tr>
                </thead>
                <tbody>
                  {requestsData.map((request) => (
                    <tr key={request.id}>
                      <td>
                        {request.User.firstName}&nbsp;{request.User.lastName}
                      </td>
                      <td>{capitalize(request.RequestType.type)}</td>
                      <td>{`${request.createdAt.slice(
                        0,
                        4
                      )}-${request.createdAt.slice(
                        5,
                        7
                      )}-${request.createdAt.slice(8, 10)}`}</td>
                      <td>{request.reason}</td>
                      <td>
                        {capitalize(request.status)}&nbsp;
                        {request.status === "pending" ? (
                          <img src="https://img.icons8.com/color/20/000000/data-pending.png" />
                        ) : request.status === "approaved" ? (
                          <img src="https://img.icons8.com/flat_round/20/000000/checkmark.png" />
                        ) : (
                          <img src="https://img.icons8.com/color/20/000000/unfriend-female.png" />
                        )}
                      </td>
                      <td className="decision">
                        <RequestsDecision />
                      </td>
                    </tr>
                  ))}
                </tbody>
                <Pagination
                  total={props.requests.length}
                  itemsPerPage={REQUESTS_PER_PAGE}
                  currentPage={currentPage}
                  onPageChage={(page) => setCurrentPage(page)}
                />
              </Table>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.adminRequests.message,
    requests: state.adminRequests.requests,
    isLoading: state.adminRequests.isLoading,
    error: state.adminRequests.error,
  };
};
export default connect(mapStateToProps, { adminRequests })(AdminRequests);
