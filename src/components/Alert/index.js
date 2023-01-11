import React from "react";
import { Alert } from "react-bootstrap";

export default function SAlert({ message, variant }) {
  return <Alert variant={variant}>{message}</Alert>;
}
