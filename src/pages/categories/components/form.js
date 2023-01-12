import React from "react";
import { Form } from "react-bootstrap";
import SButton from "../../../components/Button";
import TextInputWithLabel from "../../../components/TextInputWithLabel";

export default function SForm({
  form,
  handleChange,
  handleSubmit,
  isLoading,
  edit,
  disabled,
}) {
  return (
    <Form>
      <TextInputWithLabel
        label="Nama Kategori"
        type="text"
        placeholder="Masukan Nama Kategori"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <SButton
        loading={isLoading}
        disabled={disabled}
        color="primary"
        action={handleSubmit}
      >
        {edit ? "Ubah" : "Simpan"}
      </SButton>
    </Form>
  );
}
