import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  markUserAsLoggedIn,
  markUserAsLoggedOut,
} from "../../Redux/Slices/userSlice.mjs";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function AfterAuthRedirect() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  let [stateRedirectMessage, setStateRedirectMessage] =
    useState("Redirecting you to");

  useEffect(() => {
    document.title = "after auth redirect";
    const queryParams = new URLSearchParams(location.search);
    const success = queryParams.get("success");
    let redirect = queryParams.get("redirect");
    if (!redirect) {
      redirect = "/login";
    }

    if (success === "okay") {
      dispatch(markUserAsLoggedIn());
      setStateRedirectMessage(
        `Login Successfull, Redirecting you to ${redirect}...`
      );
    } else {
      dispatch(markUserAsLoggedOut());
      setStateRedirectMessage(
        `Kindly Retry Login again later, Redirecting you to ${redirect}...`
      );
    }

    // redirect
    setTimeout(() => {
      navigate(redirect);
    }, 2000);
  }, []);
  return <div>{stateRedirectMessage}</div>;
}
