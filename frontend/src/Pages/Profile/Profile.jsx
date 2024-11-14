import { useEffect } from "react";
export default function Profile() {
  useEffect(() => {
    document.title = "Profile";
  }, []);

  return <div>fullname profile!</div>;
}
