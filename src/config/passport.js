const GoogleStrategypp = require("passport-google-oauth20");
const GithubStrategypp = require("passport-github2");
const passport = require("passport");
const dotenv = require("dotenv");
dotenv.config();

const GoogleStrategy = GoogleStrategypp.Strategy;
const GitHubStrategy = GithubStrategypp.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID_CLIENT,
      clientSecret: process.env.GOOGLE_SECRET_CLIENT,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_ID_CLIENT,
      clientSecret: process.env.GITHUB_SECRET_CLIENT,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
