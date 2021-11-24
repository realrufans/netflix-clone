import { Header } from "../components";
import * as Routes from "../constants/Routes";

export default function HeaderComponent({children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={Routes.Home}
          src={"netflix-clone/images/misc/logo.svg"}
          alts="logo"
        />
        <Header.ButtonLink to={Routes.Sign_in}>
          Sign In
        </Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}

 
