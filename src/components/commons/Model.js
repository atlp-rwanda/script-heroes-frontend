import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const ModalComonent = ({
  isOpen,
  toggleModel,
  title,
  description,
  handleAction,
  action,
  cancelAction,
}) => {
  //   const [modal, setModal] = useState(false);

  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggleModel}>
        <ModalHeader toggle={toggleModel}>{title}</ModalHeader>
        <ModalBody>{description}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleAction}>
            {action}
          </Button>{" "}
          <Button color="secondary" onClick={toggleModel}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalComonent;
