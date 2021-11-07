import {
  Button,
  Container,
Error,
  Input,
  Link,
  Readmore,
  Base,
  Smalltext,
  Text,
  Title,
} from "./styles/form";
import { Link as Reachoutlink } from "react-router-dom";

export default function Form({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>;
}

Form.Error = function FormError({ children, ...restprops }) {
  return <Error {...restprops}>{children}</Error>
};

 


Form.Title = function FormTitle({ children, ...restprops }) {
  return <Title {...restprops}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restprops }) {
  return   <Text {...restprops}>{children}</Text>
};

Form.Link = function FormText({ children, ...restprops }) {
  return   <Reachoutlink {...restprops}>{children}</Reachoutlink>
};

Form.Smalltext = function FormSmallText({ children, ...restprops }) {
  return <Smalltext {...restprops}>{children}</Smalltext>;
};
Form.Base = function FormBase({ children, ...restprops }) {
  return <Base {...restprops}>{children}</Base>;
};
 
Form.Input = function FormInput({ children, ...restprops }) {
  return <Input {...restprops}>{children}</Input>;
};
Form.Button = function FormButton({ children, ...restprops }) {
  return <Button {...restprops}>{children}</Button>;
};
Form.Readmore = function FormButton({ children, ...restprops }) {
  return <Readmore {...restprops}>{children}</Readmore>;
};
