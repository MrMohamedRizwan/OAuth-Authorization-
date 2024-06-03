const router = require("express").Router();
const passport = require("passport");
router.get("/login", (req, res) => {
	res.render("login");
});

router.get("/logout", (req, res) => {
	res.send("Logging out");
});

router.get("/google", (req, res) => {
	res.send("Logging in with google");
});
module.exports = router;
