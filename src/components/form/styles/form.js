import { Link as ReachRouterLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  background: black;
  background-color: rgba(0, 0, 0, 0.75);
  height:80vh;
  
 
`;
export const Error = styled.div;
export const Title = styled.h1`
  text-align: start;
  margin-left: 1.5em;
`;
export const Text = styled.h1`
  font-size: 1rem;
  margin: 1em auto;
`;
export const Smalltext = styled.h2`
  font-size: 0.8rem;
  color: grey;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  margin: 0 auto;
  padding: 2.5em 1em;
  align-center: center;
  width: 80%;
`;
export const Link = styled(ReachRouterLink);



;
export const Button = styled.button`
 padding: 0.7em;
 font-size:1rem;
 font-weight:bold;
  width 80%;
  background: red;
  color: white;
  margin: 0 auto;
  margin-top: 2em;
`;


export const Input = styled.input`
font-size: 1rem;
height:5vh;
margin:0.5em auto;
width 80%;
background-color:#333;
color:white;
padding:0.2em;
border: none;
&:active  {
   
}



 
`

export const Readmore = styled.a`
  color: blueviolet;
  text-decoration: underline;
  letter-spacing: 1px;
  cursor: pointer;
  text-decoration:none;
  &:hover{
    color:red;
  }
`;
