import React from "react";
import { Button } from "react-bootstrap";

export default function SButton({
  children,
  action,
  variant,
  size,
  loading,
  disable,
  className,
}) {
  return (
    <Button
      className={className}
      onClick={action}
      variant={variant}
      disable={disable}
      size={size}
    >
      {loading ? "loading..." : children}
    </Button>
  );
}
