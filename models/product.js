const mongoose=require('mongoose');

const productSchema = new mongoose.Schema({
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
    reviews: [
      {
        rating: Number,
        comment: String,
        date: Date,
        reviewerName: String,
        reviewerEmail: String,
      },
    ],
  
    returnPolicy: String,
    images: [String],
    thumbnail: String,
  });
  
  
const Product = mongoose.model("Product", productSchema);

module.exports=Product;