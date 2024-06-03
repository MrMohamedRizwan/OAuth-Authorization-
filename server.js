const express = require("express");
const morgan = require("morgan");
const app = express();
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
	// res.send("Hello from express");
	res.render("home");
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
