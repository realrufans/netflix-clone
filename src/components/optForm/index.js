import React from "react";
import { Container, Input, Button, Text, Frame } from "./styles/optForm";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Frame = function OptFormFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="netflix-clone/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
