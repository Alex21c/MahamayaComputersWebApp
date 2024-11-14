import passport from "./Passport/passport-config.mjs";
import e from "express";
import jwt from "jsonwebtoken";
import morgan from "morgan";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import fs from "fs";
import session from "express-session";
import cookieParser from "cookie-parser";
import { cookiesOptions } from "./Utils/Misc.mjs";
import { Resend } from "resend";

// Check if the upload directory exists, if not, create it
const uploadDir = "Uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log(`Upload directory created at ${uploadDir}`);
}

const PORT = process.env.PORT || 4000;
const app = e();
app.use(cookieParser([process.env.JWT_PRIVATE_KEY]));

// Req logging
app.use(morgan("dev"));

// Making connection with DB
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => {
    console.log("Connection Established with Database!");
  })
  .catch((err) => {
    console.log(err);
    console.log("Unable to connect to DB!");
    console.log("Exiting...");
    process.exit(1);
  });

// cors
const corsOptions = {
  origin: (origin, callback) => {
    if (
      !origin ||
      origin.includes("http://localhost:3000") ||
      origin.includes(process.env?.BASE_URL_FRONT_END)
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  allowedHeaders: ["Authorization", "Content-Type"],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// allow me to export json from body
app.use(e.json());
// for google auth to enable cookies save
app.use(
  session({
    secret: process.env.JWT_PRIVATE_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

// linking passport
app.use(passport.initialize());
// Initiate Google authentication
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect:
      process.env.BASE_URL_FRONT_END + "/" + process.env.FRONT_END_LOGIN_PAGE,
  }),
  (req, res) => {
    // After successful authentication, generate JWT
    const token = jwt.sign({ _id: req.user._id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: "1d",
    });

    // Send Set-Cookie header
    res.cookie("jwt", token, cookiesOptions);

    // if
    res.redirect(`${process.env.BASE_URL_FRONT_END}/profile`);
  }
);

// Handle the Google callback
const resend = new Resend(process.env.API_KEY_RESEND);
async function sendMail() {
  const { data, error } = await resend.emails.send({
    from: "Mahamaya Computers <no-reply@mahamayacomputers.com>",
    to: ["aasalex21c@gmail.com"],
    subject: "Testing email",
    html: "<strong>It works!</strong>",
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
}

// Routes
app.get("/api/v1/send-email", (req, res, next) => {
  sendMail();
  res.send("wait");
});

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error!",
  });
});

app.listen(PORT, () => {
  console.log(`SERVER is up and running at port ${PORT}`);
});
