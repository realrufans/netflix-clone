import { Container, SubTitle, Title } from "./styles/features";

export default function Features({ children }) {
  return <Container>{children}</Container>;
}

Features.Title = function FeaturesTitle({ children }) {
  return <Title>{children}</Title>;
};

Features.SubTitle = function FeaturesSubTitle({ children }) {
  return <SubTitle>{children}</SubTitle>;
};
