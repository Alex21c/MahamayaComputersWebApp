import validator from "validator";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { markUserAsLoggedOut } from "../../Redux/Slices/userSlice.mjs";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import apiUrls from "../../apiUrls.mjs";
import MuiSnackbar, {
  useSetInitialStateSnackbar,
  openTheSnackBar,
  showSuccessMsg,
  showErrorMsg,
} from "../../Components/MUI/Snackbar/MuiSnackbar";

export default function Logout() {
  const [open, setOpen] = useSetInitialStateSnackbar();
  const [snackbarState, setSnackbarState] = useState({
    msg: "",
    successOrError: "error",
  });
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  let [stateRedirectMessage, setStateRedirectMessage] =
    useState("Logging you out...");
  async function handleLogout(event) {
    let redirect = "/";
    try {
      const apiUrl = apiUrls?.user?.logout;
      if (!apiUrl) {
        throw new Error(
          "failed to make api call, Missing apiUrls?.user?.logout"
        );
      }

      if (
        !validator.isURL(process.env.REACT_APP_SERVER_ROOT_URL, {
          require_tld: false,
        })
      ) {
        throw new Error(
          `failed to make api call, kindly make sure .env contains valid url, process.env.REACT_APP_SERVER_ROOT_URL, ${process.env.REACT_APP_SERVER_ROOT_URL}`
        );
      }
      const reqUrl = process.env.REACT_APP_SERVER_ROOT_URL + apiUrl;

      const headers = {
        "Content-Type": "application/json",
      };

      let response = await fetch(reqUrl, {
        method: "POST",
        headers,
        credentials: "include",
      });
      if (!response) {
        throw new Error(
          "Failed to Make Req. with Server! please try again later..."
        );
      }
      response = await response.json();
      console.log(response);
      if (!response?.success) {
        throw new Error("Failed to logout ! please try again later...");
      }
      dispatch(markUserAsLoggedOut());
      redirect = "/login";
      setStateRedirectMessage(
        `Logout Successfull, Redirecting you to ${redirect} ...`
      );

      showSuccessMsg(response.message, setSnackbarState, setOpen);
    } catch (error) {
      console.log(error.message);
      showErrorMsg(
        "Failed to log you out, kindly try again later !",
        setSnackbarState,
        setOpen
      );
      redirect = "/";
      setStateRedirectMessage(
        `Logout attempt Unsuccessful, Redirecting you to ${redirect} ...`
      );
    } finally {
      setTimeout(() => {
        navigate(redirect);
      }, 2000);
    }
  }

  useEffect(() => {
    document.title = "Logout";

    handleLogout();
    // make an api call to server to log user out by deleting the http cookie
  }, []);
  return (
    <div>
      {stateRedirectMessage}
      <MuiSnackbar
        open={open}
        setOpen={setOpen}
        snackbarState={snackbarState}
      />
    </div>
  );
}
