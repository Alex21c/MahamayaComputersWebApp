import { useSelector } from "react-redux";
import { genLinkTag } from "../../Utils/utils";
export default function Header() {
  const User = useSelector((store) => store.User);
  // console.log(User);
  return (
    <header>
      {User?.isLoggedIn
        ? genLinkTag("/logout", "logout")
        : genLinkTag("/login", "login")}
      <br />
      {genLinkTag("/", "homepage")}
    </header>
  );
}
