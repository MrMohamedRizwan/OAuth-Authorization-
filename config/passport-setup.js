const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
passport.use(
	new GoogleStrategy(
		{
			callbackURL: "/auth/google/redirect",
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
		},
		(accessToken, refreshToken, profile, done) => {
			console.log(done);
		},
	),
);
