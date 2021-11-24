 
import { Form } from "../components";
import HeaderComponent from "../containers/header";
import * as ROUTES from "../constants/Routes";
import {  useHistory } from "react-router";
import { useContext, useState } from "react";
import { FirebaseContext } from "../context/firebase";

export default function Signup() {

  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()

 

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleSignup = (event) => {
    event.preventDefault();
    console.log(firebase)
    
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) =>
            result.user
            .updateProfile({
                displayName: firstName,
                photoURL: Math.floor(Math.random() * 5 ) + 1,
            })
            .then(() => {
                setEmailAddress('');
                setPassword('');
                setError('');
               history.push(ROUTES.Browse);
            })
        ).catch((error) => setError(error.message));
};

  const isValid =
    (firstName === "") | (lastName === "") | (email === "") | (password === "");
  return (
    <HeaderComponent>
      <Form>
        <Form.Base onSubmit={handleSignup} method="POST">
          <Form.Title>Sign Up</Form.Title>
           {error && <Form.Error>{error}</Form.Error>}
          <Form.Input
            name="firstname"
            type="text"
            value={firstName}
            placeholder="FirstName:"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Form.Input
            name="lastname"
            type="text"
            value={lastName}
            placeholder="LastName:"
            onChange={(e) => setLastname(e.target.value)}
          />
          <Form.Input
            name="email"
            type="text"
            value={email}
            placeholder="Email or phone number"
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <Form.Input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <Form.Button disabled={isValid}  type="submit">
            Sign Up
          </Form.Button>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Text>
            You have an account? {''}
            <Form.Link to={ROUTES.Sign_in}>Sign In</Form.Link>
          </Form.Text>
          <Form.Smalltext>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
          </Form.Smalltext>{" "}
        </Form.Base>
      </Form>
    </HeaderComponent>
  );
}
