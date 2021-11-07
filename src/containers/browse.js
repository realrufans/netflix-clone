import { useState } from "react";
import { FooterContainer } from "./footer";
import { SelectProfileContainer } from "./profile";
import { FirebaseContext } from "../context/firebase";
import users from "../fixtures/users.json";
export function BrowseContainer({user}) {

 

  const [profile, setprofile] = useState(users);
 

  return profile.displayName ? (
    <>
    {console.log(profile.displayName)}
      <p>list of films</p> <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={users} setProfile={setprofile} />
  );
}
