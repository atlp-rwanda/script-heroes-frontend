import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateRole, deleteRole } from "../../redux/actions/roles";

const RolesList = () => {
  const [modal, setModal] = useState(false);
  const [whichModal, setWhichModal] = useState("");
  const [roleInModal, setRoleInModal] = useState({});
  const [modalName, setModalName] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const updating = useSelector((state) => state.statuses.updating);
  const roles = useSelector((state) => state.roles.roles);
  const deleting = useSelector((state) => state.statuses.deleting);

  const toggle = () => setModal(!modal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!updating && modal) {
      toggle();
    }
  }, [updating]);

  useEffect(() => {
    if (!deleting && modal) {
      toggle();
    }
  }, [deleting]);

  const openEditModal = (role) => {
    setRoleInModal(role);
    setModalName(role.name);
    setModalDescription(role.description);
    setWhichModal("edit");
    toggle();
  };

  const openDeleteModal = (role) => {
    setRoleInModal(role);
    setWhichModal("delete");
    toggle();
  };

  const isValid = ({ target }) => {
    if (target.value.length < 3) {
      target.classList.add("is-invalid");
      target.classList.remove("is-valid");
    } else {
      target.classList.remove("is-invalid");
      target.classList.add("is-valid");
    }
  };

  const handleEdit = () => {
    if (modalName.length < 3 || modalDescription.length < 3) {
      return;
    } else {
      dispatch(
        updateRole(roleInModal.id, {
          name: modalName,
          description: modalDescription,
        })
      );
    }
  };

  const handleDelete = () => {
    dispatch(deleteRole(roleInModal));
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {whichModal === "edit" ? "Edit" : "Delete"} {roleInModal.name}
        </ModalHeader>
        <ModalBody>
          {whichModal === "edit" ? (
            <form className="modal-form">
              <p>Name</p>
              <Input
                name="modal-name"
                onBlur={isValid}
                value={modalName}
                onChange={({ target }) => setModalName(target.value)}
              />
              <p className="invalid-feedback">
                A name must be atleast 4 string characters
              </p>
              <div>
                <p>Description</p>
                <Input
                  name="modal-description"
                  onBlur={isValid}
                  value={modalDescription}
                  onChange={({ target }) => setModalDescription(target.value)}
                />
                <p className="invalid-feedback">
                  A description must be atleast 4 string characters
                </p>
              </div>
            </form>
          ) : (
            <p>
              Are you sure you want to delete this role, this action cannot be
              undone
            </p>
          )}
        </ModalBody>
        <ModalFooter>
          {whichModal === "edit" ? (
            <Button className="update" onClick={handleEdit}>
              {updating ? <Spinner size="sm" /> : "Update"}
            </Button>
          ) : (
            <Button className="delete" color="danger" onClick={handleDelete}>
              {deleting ? <Spinner size="sm" /> : "Delete"}
            </Button>
          )}

          <Button className="cancel" color="warning" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <Card>
        <CardHeader>
          <h4 className="text-center">Available roles</h4>
        </CardHeader>
        <CardBody>
          {roles.length
            ? roles.map((role) => (
                <div className="role" key={role.id}>
                  <p>{role.name}</p>
                  <span>
                    <span
                      className="edit mr-1"
                      onClick={() => openEditModal(role)}
                    >
                      <FontAwesomeIcon icon="edit" />
                    </span>
                    <span
                      className="delete ml-1"
                      onClick={() => openDeleteModal(role)}
                    >
                      <FontAwesomeIcon icon="trash-alt" />
                    </span>
                  </span>
                </div>
              ))
            : ""}
        </CardBody>
      </Card>
    </div>
  );
};

export default RolesList;
