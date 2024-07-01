const mongoose=require('mongoose');

const cartSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    description: String,
    category: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    tags: [String],
    brand: String,
    warrantyInformation: String,
    shippingInformation: String,
    availabilityStatus: String,
    returnPolicy: String,
    thumbnail: String,
  });
  
  //cart model
  const Cart = mongoose.model("Cart", cartSchema);

  module.exports=Cart;