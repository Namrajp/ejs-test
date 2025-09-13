const express = require("express");
const app = express();

// Set EJS as the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //   const data = {
  //     username: "Amar Pudasaini",
  //   };

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

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
