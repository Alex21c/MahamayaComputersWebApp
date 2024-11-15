import { useSelector } from "react-redux";
import { genLinkTag } from "../../Utils/utils";
export default function Footer() {
  const User = useSelector((store) => store.User);
  // console.log(User);
  return (
    <footer>
      {genLinkTag("/privacy-policy", "Privacy-policy")}
      <br />
      {genLinkTag("/terms-of-service", "Terms-of-service")}
    </footer>
  );
}
