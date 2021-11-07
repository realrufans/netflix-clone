import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Browse, Homepage , SignIn, Signup} from "./pages";
import * as Routes from "../src/constants/Routes";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.Sign_in}>
          <SignIn/>
        </Route>

        <Route path={Routes.Sign_up}>
         <Signup/>
        </Route>

        <Route path={Routes.Browse}>
           <Browse/>
        </Route>

        <Route path={Routes.Home}>
          <Homepage  />
        </Route>
      </Switch>
    </Router>
  );
}
