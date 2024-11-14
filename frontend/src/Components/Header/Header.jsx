import { genLinkTag } from "../../Utils/utils";
export default function Header() {
  // get login info from context
  return (
    <header>
      {genLinkTag("/login", "login")} {genLinkTag("/", "homepage")}
    </header>
  );
}
