const path = require("path"); // Required for path.join

const express = require("express");
const app = express();
// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Parse URL-encoded form data
app.get("/", (req, res) => {
  const fruits = ["Apple", "Banana", "Orange"];
  const items = [
    { name: "electronics", quantity: 5 },
    { name: "furniture", quantity: 6 },
    { name: "cloths", quantity: 43 },
    { name: "books", quantity: 4 },
  ];
  // Render ejs template and pass data
  res.render("index", {
    username: "Amar Pudasaini",
    items: fruits,
    stuffs: items,
  });
});
// Handle POST request when the form is submitted
app.post("/submit", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  // Process the form data (e.g., save to a database)
  // Redirect or render a response
  res.send(`Thank you, ${name}, for submitting your email (${email}).`);
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
