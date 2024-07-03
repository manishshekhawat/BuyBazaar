const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// MongoDB connection
async function main() {
  const uri = "mongodb+srv://569manish2020:P0osmzEQ9lJHlYYf@cluster0.zmg14sv.mongodb.net/e-commerce?retryWrites=true&w=majority&appName=Cluster0";
  await mongoose.connect(uri);

  console.log("database connected");
}
main().catch((err) => console.log("Database connection error:", err));

app.use(express.json());
app.use(cors());

//product
const {
  getProducts,
  getProductsByCategory,
  getProductsById,
  insertProduct,
} = require("./controller/product");

app.get("/products", getProducts);
app.get("/products/category/:category", getProductsByCategory);
app.get("/products/:_id", getProductsById);
app.post("/products", insertProduct);

//cart
const {
  insertCartProduct,
  getCartProducts,
  deleteCartProduct,
} = require("./controller/cart");

app.post("/cart", insertCartProduct);
app.get("/cart", getCartProducts);
app.delete("/cart/:_id", deleteCartProduct);


//wishlist
const {
  insertWishlistProduct,
  getWishlistProduct,
  deleteWishlistProduct,
} = require("./controller/wishlist");

app.post("/wishlist", insertWishlistProduct);
app.get("/wishlist", getWishlistProduct);
app.delete("/wishlist/:_id", deleteWishlistProduct);


//user signup/login
const { login, signup } = require("./controller/signup_loginDetails");
app.post("/signup", signup);
app.post("/login", login);


//adminLogin
const { adminLogin } = require("./controller/adminLogin");
app.post("/adminlogin", adminLogin);


app.listen(5000, () => {
  console.log("server is running at port no. 5000");
});
