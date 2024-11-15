import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { useEffect } from "react";
export default function Profile() {
  useEffect(() => {
    document.title = "Profile";
  }, []);

  return (
    <div>
      <Header />
      fullname profile!
      <Footer />
    </div>
  );
}
