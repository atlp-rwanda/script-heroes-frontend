import React from "react";
import { Alert } from "reactstrap";

export default ({ message, isOpen, color }) => (
  <Alert isOpen={isOpen} color={color}>
    {message}
  </Alert>
);
