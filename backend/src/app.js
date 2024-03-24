import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// This line allows different websites or origins to securely communicate with your server.
// It specifies which origins are allowed to make requests to your server.
// The credentials: true part ensures that sensitive information like cookies can be sent along with the requests.

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// This line helps your server understand requests that send data in JSON format.
// It's like your server knowing how to read a message written in a specific language (JSON).
// The limit: "16kb" part sets a size limit for these JSON messages to keep them manageable and prevent abuse.

app.use(express.json({ limit: "16kb" }));

// This line helps your server understand requests that send data in the form of URL-encoded strings, usually from HTML forms.
// It's like your server understanding a different format of messages (URL-encoded) apart from JSON.
// The limit: "16kb" part sets a size limit for these messages to prevent excessively large requests.

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// This line tells your server to share certain files (like images, stylesheets, or scripts) with anyone who requests them.
// It's like your server opening a public folder where everyone can access specific files directly.
// The "public" part refers to the folder from which these files will be shared

app.use(express.static("public"));

// This line helps your server understand cookies sent by clients (like web browsers).
// It's like your server knowing how to read notes attached to incoming requests.
// This allows your server to identify users or remember their preferences stored in cookies.

app.use(cookieParser());



//routes import
import userRouter from './routes/user.routes.js'

//routes declaration
//app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)



// http://localhost:3000/api/v1/users/register

export { app }