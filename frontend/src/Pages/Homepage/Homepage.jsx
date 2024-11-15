import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { useEffect } from "react";
import { genLinkTag } from "../../Utils/utils";
export default function Homepage() {
  useEffect(() => {
    document.title = "Mahamaya Computers";
  }, []);

  return (
    <div>
      <Header />
      Homepage Mahamaya Computers !
      <Footer />
    </div>
  );
}
