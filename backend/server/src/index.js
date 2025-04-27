const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const foodData = [
    {
      name: "Boiled Egg",
      price: 10,
      text: "Perfectly boiled eggs, rich in protein and flavor — a healthy start to your day.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "Ramen",
      price: 25,
      text: "Steaming hot noodles in a savory broth, topped with fresh vegetables and tender meat.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "Grilled Chicken",
      price: 45,
      text: "Juicy grilled chicken seasoned with herbs and spices, grilled to perfection.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "Cake",
      price: 18,
      text: "Soft and moist cake layered with creamy frosting — a delightful treat for any time.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "Burger",
      price: 23,
      text: "A classic beef burger with fresh lettuce, tomatoes, melted cheese, and a special sauce.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "Pancake",
      price: 25,
      text: "Fluffy golden pancakes served with maple syrup and a touch of butter — a breakfast favorite.",
      image: "/images/pancake.png",
      type: "dinner",
    },
  ];

  res.json(foodData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
}); 