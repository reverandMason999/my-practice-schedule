const http = require("http");
const hostname = "127.0.0.1";
const port = 5000;
const express = require("express");
const userRoute = require('./routes/user');
const routineRoute = require('./routes/routine');
const itemRoute = require('./routes/item');
const loginWithGoogleRoute = require('./routes/loginWithGoogle')
const loginRoute = require('./routes/login')
const registerRoute = require('./routes/register')
const passport = require("passport");
const cors = require('cors')
const session = require('express-session');
require('dotenv').config()

require('./auth/passport')
require('./auth/passportGoogleSSO')

const app = express();
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session())


const server = http.createServer(app);

app.use(userRoute);
app.use(routineRoute);
app.use(itemRoute);
app.use(loginWithGoogleRoute);
app.use(registerRoute);
app.use(loginRoute)


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

