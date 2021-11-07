import React from "react";
import {
  Inner,
  Item,
  Container,
  Image,
  Title,
  SubTitle,
  Pane,
} from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restprops
}) {
  return (
    <Item {...restprops}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restprops }) {
  return <SubTitle {...restprops}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restprops }) {
  return <Image {...restprops} />;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restprops }) {
  return <Pane {...restprops}>{children}</Pane>;
};
