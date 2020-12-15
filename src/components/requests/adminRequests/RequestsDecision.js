import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Spinner,
} from "reactstrap";
import ModalComonent from "../../commons/Model";
import decisionAction from "../../../../redux/actions/decision";

const RequestsDecision = ({ id }) => {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const loading = useSelector((action) => action.requestDecision.loading);
  const decisionSuccess = useSelector(
    (action) => action.requestDecision.decisionSuccess
  );

  const toggleModel = () => setModal(!modal);
  const handleAction = (id) => {
    console.log(id);
    dispatch(decisionAction(id, "decline"));
  };

  useEffect(() => {
    if (decisionSuccess) {
      location.reload();
    }
  }, [decisionSuccess]);

  const action = loading ? <Spinner color="light" size="sm" /> : "Continue";

  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
        <DropdownToggle caret>Decision</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Choose Decision</DropdownItem>
          <DropdownItem>Accept</DropdownItem>
          <DropdownItem onClick={toggleModel}>Reject</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <ModalComonent
        handleAction={() => handleAction(id)}
        isOpen={modal}
        title="Do you want to reject this request"
        description="hope you know well what you are doing"
        toggleModel={toggleModel}
        action={action}
      />
    </div>
  );
};

export default RequestsDecision;
