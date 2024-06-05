const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const passportSetup = require("./config/passport-setup");
const authRoutes = require("./routes/auth-routes");
console.log(process.env.GOOGLE_CLIENT_ID);
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
	// res.send("Hello from express");
	res.render("home");
});
app.use("/auth", authRoutes);

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
