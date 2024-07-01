const mongoose=require('mongoose');

const wishlistSchema = new mongoose.Schema({
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
  
  //wishlist model
  const Wishlist = mongoose.model("Wishlist", wishlistSchema);

  module.exports=Wishlist;