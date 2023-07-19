const cors = require("cors");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const cookieParser = require("cookie-parser");
const brandRouter = require("./routes/Brand.js");
const productRouter = require("./routes/Product.js");
const categoryRouter = require("./routes/Category.js");
const { createProduct } = require("./controller/Product.js");
const { connection } = require("./config/db.js");
const usersRouter = require("./routes/User.js");
const authRouter = require("./routes/Auth.js");
const cartRouter = require("./routes/Cart.js");
const ordersRouter = require("./routes/Order.js");
const { User } = require("./model/User.js");
const { isAuth, sanitizeUser, cookieExtractor } = require("./services/common");

const SECRET_KEY = "SECRET_KEY";
const opts = {};
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = SECRET_KEY;

const app = express();
app.use(express.json());

app.use(express.static("build"));
app.use(cookieParser());
app.use(
  session({
    secret: "party animal",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
app.use("/products", isAuth(), productRouter.router);
app.use("/categories", isAuth(), categoryRouter.router);
app.use("/brands", isAuth(), brandRouter.router);
app.use("/users", isAuth(), usersRouter.router);
app.use("/auth", authRouter.router);
app.use("/cart", isAuth(), cartRouter.router);
app.use("/orders", isAuth(), ordersRouter.router);

passport.use(
  "local",
  new LocalStrategy({ usernameField: "email" }, async function (
    username,
    password,
    done
  ) {
    try {
      const user = await User.findOne({ email: email });
      console.log(email, password, user);
      if (!user) {
        return done(null, false, { message: "invalid credentials" });
      }
      crypto.pbkdf2(
        password,
        user.salt,
        310000,
        32,
        "sha256",
        async function (err, hashedPassword) {
          if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
            return done(null, false, { message: "invalid credentials" });
          }
          const token = jwt.sign(sanitizeUser(user), SECRET_KEY);
          done(null, {token});
        }
      );
    } catch (err) {
      done(err);
    }
  })
);

passport.use(
  "jwt",
  new JwtStrategy(opts, async function (jwt_payload, done) {
    console.log({ jwt_payload });
    try {
        const user = await User.findById(jwt_payload.id);
      if (user) {
        return done(null, sanitizeUser(user));
      } else {
        return done(null, false);
      }
    } catch (err) {
      return done(err, false);
    }
  })
);

passport.serializeUser(function (user, cb) {
  console.log("serialize", user);
  process.nextTick(function () {
    return cb(null, { id: user.id, role: user.role });
  });
});
passport.serializeUser(function (user, cb) {
  console.log("serialize", user);
  process.nextTick(function () {
    return cb(null, { id: user.id, role: user.role });
  });
});
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB successfully port: " + process.env.port);
  } catch (error) {
    console.log(error);
  }
});
