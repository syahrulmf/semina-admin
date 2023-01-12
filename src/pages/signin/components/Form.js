import React from "react";
import { Form } from "react-bootstrap";
import SButton from "../../../components/Button";
import TextInputWithLabel from "../../../components/TextInputWithLabel";

export default function SForm({ form, handleChange, handleSubmit, isLoading }) {
  return (
    <Form>
      <TextInputWithLabel
        label="Email Address"
        type="email"
        placeholder="Enter email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <TextInputWithLabel
        label="Password"
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <SButton
        loading={isLoading}
        disabled={isLoading}
        color="primary"
        action={handleSubmit}
      >
        Submit
      </SButton>
    </Form>
  );
}
