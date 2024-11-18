import { cookiesOptions } from "../Utils/Misc.mjs";
import passport from "../Passport/passport-config.mjs";
import jwt from "jsonwebtoken";
import CustomError from "../Utils/CustomError.mjs";

// Google authentication
const google = (req, res, next) => {
  passport.authenticate("google", { scope: ["profile", "email"] })(
    req,
    res,
    next
  );
};

// Google callback after authentication
const googleCallback = (req, res, next) => {
  passport.authenticate("google", (error, user, info) => {
    if (error) {
      return res.redirect(
        `${process.env.BASE_URL_FRONT_END}/after-auth-redirect?success=false&redirect=/login&msg=${error.message}`
      );
      // console.log(error);
      // return next(new CustomError(500, error.message));
    }
    if (!user) {
      return res.redirect(
        `${process.env.BASE_URL_FRONT_END}/after-auth-redirect?success=false&redirect=/login&msg=user does not exist`
      );
      // return next(new CustomError(400, "Authentication failed"));
    }

    // Generate JWT for the user
    const token = jwt.sign({ _id: user._id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: process.env.USER_SESSION_EXPIRES_AFTER,
    });

    // Send JWT as a cookie
    res.cookie("jwt", token, cookiesOptions.login);

    // Redirect to profile or dashboard after successful login
    res.redirect(
      `${process.env.BASE_URL_FRONT_END}/after-auth-redirect?success=okay&redirect=/profile`
    );
  })(req, res, next);
};

const logout = async (req, res) => {
  res.clearCookie("jwt", cookiesOptions.logout);
  res.json({
    success: true,
    message: "Successfully logged out !",
  });
};

const AuthController = {
  google,
  googleCallback,
  logout,
};

export default AuthController;
