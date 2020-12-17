import { SymbolDescriptiveString } from "es-abstract";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Form, FormGroup, Label, Input, Col, Row, Container } from "reactstrap";
import "./styles.scss";

const Comment = () => {
  return (
    <div className="comments">
      <Container>
        <Row xs="2">
          <Col>JOHN Doe</Col>
          <Col>Sample comment body</Col>
        </Row>
      </Container>
      <br />
      <Form>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleText" sm={2}>
            You
          </Label>

          <Input type="textarea" name="text" className="active" />

          <i className="pull-right">
            <FontAwesomeIcon icon={faPaperPlane} />
          </i>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Comment;
