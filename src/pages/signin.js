import { Form } from "../components";
import HeaderComponent from "../containers/header";
import * as ROUTES from "../constants/Routes";
import { React, useState } from "react";
import { FooterContainer } from "../containers/footer";
import { FirebaseContext } from "../context/firebase";
export default function SignIn() {
  const [error, setError] = useState("");
  const [readmore, setReadmore] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email ==='' || password ===''

  console.log(isValid)
  
  console.log(FirebaseContext)

  const handSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signin--page">
      <HeaderComponent>
        <Form>
          <Form.Base onSubmit={handSubmit} method="POST">
            <Form.Title>Sign in</Form.Title>
            <Form.Input
              name="email"
              type="text"
              value={email}
              placeholder="Email or phone number"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <Form.Button disabled={isValid} type="submit">
              Sign in
            </Form.Button>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Text>
              New to Netflix?{" "}
              <Form.Link to={ROUTES.Sign_up}>Sign up now</Form.Link>
            </Form.Text>
            <Form.Smalltext>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <Form.Readmore onClick={() => setReadmore(!readmore)}>
                {" "}
                {readmore ? null : "learn more"}{" "}
              </Form.Readmore>
            </Form.Smalltext>{" "}
            {readmore ? (
              <Form.Smalltext>
                {" "}
                "The information collected by Google reCAPTCHA is subject to the
                Google Privacy Policy and Terms of Service, and is used for
                providing, maintaining, and improving the reCAPTCHA service and
                for general security purposes (it is not used for personalized
                advertising by Google). "
              </Form.Smalltext>
            ) : null}
          </Form.Base>
        </Form>
      </HeaderComponent>
      <FooterContainer />
    </div>
  );
}
