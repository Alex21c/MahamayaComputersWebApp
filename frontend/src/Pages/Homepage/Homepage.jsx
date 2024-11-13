import { useEffect } from "react";
import { genLinkTag } from "../../Utils/utils";
export default function Homepage() {
  useEffect(() => {
    document.title = "Mahamaya Computers";
  }, []);

  return (
    <div>
      Homepage Mahamaya Computers !
      <footer>
        {genLinkTag("/privacy-policy", "Privacy-policy")}
        <br />
        {genLinkTag("/terms-of-service", "Terms-of-service")}
      </footer>
    </div>
  );
}
