import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Form,
  Input,
  Button,
  Spinner,
  Alert,
} from "reactstrap";
import { getRoles, createRole } from "../../../redux/actions/roles";
import { assignRole, getUsers } from "../../../redux/actions/users";
import UsersList from "../../components/UsersList";
import RolesList from "../../components/RolesList";

import "./Roles.scss";

function Roles() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [userRole, setUserRole] = useState("");
  const [validName, setValidName] = useState("");
  const [validDescription, setValidDescription] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [visible, setVisible] = useState(true);

  const creating = useSelector((state) => state.statuses.creating);
  const assigning = useSelector((state) => state.statuses.assigning);

  const users = useSelector((state) => state.users.users);
  const roles = useSelector((state) => state.roles.roles);
  const alert = useSelector((state) => state.alerts);

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "User Role Settings | Barefoot Nomad";
    dispatch(getUsers());
    dispatch(getRoles());
  }, []);

  useEffect(() => {
    setEmail(users[0]?.email);
  }, [users]);

  useEffect(() => {
    setUserRole(roles[0]?.name);
  }, [roles]);

  useEffect(() => {
    if (!creating) {
      setName("");
      setDescription("");
    }
  }, [creating]);

  useEffect(() => {
    if (description.length >= 10 && name.length >= 3) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, description]);

  useEffect(() => {
    if (name.length >= 3) {
      setValidName("is-valid");
    } else {
      setValidName("is-invalid");
    }
  }, [name]);

  useEffect(() => {
    if (description.length >= 10) {
      setValidDescription("is-valid");
    } else {
      setValidDescription("is-invalid");
    }
  }, [description]);

  useEffect(() => {
    setVisible(true);
  }, [alert]);

  const handleCreate = (e) => {
    e.preventDefault();

    dispatch(createRole({ name, description }));
  };

  const handleAssign = (e) => {
    e.preventDefault();
    dispatch(assignRole({ email, userRole }));
  };

  return (
    <div className="role-settings">
      <Container>
        {alert.message ? (
          <Alert
            color={alert.color}
            isOpen={visible}
            toggle={() => setVisible(false)}
          >
            {alert.message}
          </Alert>
        ) : (
          ""
        )}

        <h3>User Role Settings</h3>
        <Row>
          <Col md={8}>
            <Container>
              <Form onSubmit={handleCreate} className="create-role">
                <Card>
                  <CardHeader>
                    <Row>
                      <Col md={12}>
                        <h4>Create role:</h4>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Row className="d-flex align-items-start justify-content-between">
                      <Col md={4}>
                        <p>Name</p>
                        <Input
                          name="name"
                          className={validName}
                          value={name}
                          onChange={({ target }) => setName(target.value)}
                        />
                        <p className="invalid-feedback">
                          A name must be atleast 3 string characters
                        </p>
                      </Col>
                      <Col md={4}>
                        <p>Description</p>
                        <Input
                          name="description"
                          className={validDescription}
                          value={description}
                          onChange={({ target }) =>
                            setDescription(target.value)
                          }
                        />
                        <p className="invalid-feedback">
                          A description must be atleast 10 string characters
                        </p>
                      </Col>
                      <Col className="submit-col" md={4}>
                        <Button type="submit" disabled={disabled}>
                          {creating ? <Spinner size="sm" /> : "Create"}
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Form>
            </Container>
            <Container>
              <Form onSubmit={handleAssign} className="assign-role">
                <Card>
                  <CardHeader>
                    <Row>
                      <Col md={12}>
                        <h4>Assign roles:</h4>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Row className="d-flex align-items-end justify-content-between">
                      <Col md={4}>
                        <p>User email</p>
                        <Input
                          className="email"
                          type="select"
                          value={email}
                          onChange={({ target }) => setEmail(target.value)}
                        >
                          {users.map((user) => (
                            <option key={user.id}>{user.email}</option>
                          ))}
                        </Input>
                      </Col>
                      <Col md={4}>
                        <p>Role name</p>
                        <Input
                          className="role-name"
                          type="select"
                          value={userRole}
                          onChange={({ target }) => setUserRole(target.value)}
                        >
                          {roles.map((role) => (
                            <option key={role.id}>{role.name}</option>
                          ))}
                        </Input>
                      </Col>
                      <Col className="mt-3" md={4}>
                        <Button type="submit">
                          {assigning ? <Spinner size="sm" /> : "Assign"}
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Form>
            </Container>
          </Col>
          <Col md={4}>
            <Container>
              <RolesList />
            </Container>
          </Col>
        </Row>
      </Container>
      <Container>
        <UsersList />
      </Container>
    </div>
  );
}

export default Roles;
