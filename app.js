const path = require("path"); // Required for path.join

const express = require("express");
const app = express();
// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // static file i.e. public folder
// form submit middleware
app.use(express.urlencoded({ extended: true }));

// Parse URL-encoded form data
app.get("/", (req, res) => {
  // Render ejs template and pass data
  res.render("index", {
    title: "My Portfolio Website",
    message: "Welome to HomePage",
  });
});
app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    message: "Welcome! from Nawaraj Pudasaini",
  });
});
app.get("/work", (req, res) => {
  res.render("work", {
    title: "My Projects",
    message: "Some Projects I was involved with",
  });
});
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Please Get in Touch", message: "Contact" });
});
// Handle POST request when the form is submitted
app.post("/submit-form", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  // Process the form data (e.g., save to a database)
  // Redirect or render a response
  // res.send(`Thank you, ${name}, for submitting your email (${email}).`);
  res.send(`<div style="max-width: 60%; margin: 4rem auto;padding: 2rem; background: #666;color: #fff;text-align: center;">
  <h2>Thank you, ${name}.</h2>
  <p> We like to welcome you for submitting your email (${email}).</p>
</div>`);
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
