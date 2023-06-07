const express = require("express");

const app = express();

const foods = [
  { id: 1, name: "Pizza", cuisine: "Italian", price: 9.99 },
  { id: 2, name: "Sushi", cuisine: "Japanese", price: 12.99 },
  { id: 3, name: "Tacos", cuisine: "Mexican", price: 7.99 },
  { id: 4, name: "Pad Thai", cuisine: "Thai", price: 10.99 },
  { id: 5, name: "Burger", cuisine: "American", price: 8.99 },
];

app.use(express.static("public"));

app.get("/data", (req, res) => {
  res.status(200).json(foods);
  // 100 - 199 - information
  // 200 - 299 - OK
  // 300 - 399 - Redirect
  // 400 - 499 - Client error
  // 500 - 599 - Server Error
});

app.listen(5000, () => {
  console.log("server started");
});
