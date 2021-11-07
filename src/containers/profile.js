import * as ROUTES from "../constants/Routes";
import users from "../fixtures/users.json";

import { Header, Profiles } from "../components";

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.Home} src="images/misc/logo.svg" />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          {users.map((user) => {
            return (
              <>
                <Profiles.User key={user.id}>
                <Profiles.Name>{user.displayName}</Profiles.Name>
                  <Profiles.Picture
                    src={user.photoURL}
                    onClick={() =>
                      setProfile({
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                      })
                    }
                  />
                </Profiles.User>
              </>
            );
          })}
        </Profiles.List>
      </Profiles>
    </>
  );
}
