const Product = require('../models/product');
const Wishlist =require('../models/wishlist');


const insertWishlistProduct=async (req, resp) => {
    const _id = req.body.productId;
    const product = await Product.findById({ _id });
  
    const wishlist = new Wishlist({
      _id: product._id,
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      stock: product.stock,
      discountPercentage: product.discountPercentage,
      rating: product.rating,
      tags: product.tags,
      brand: product.brand,
      warrantyInformation: product.warrantyInformation,
      shippingInformation: product.shippingInformation,
      availabilityStatus: product.availabilityStatus,
      returnPolicy: product.returnPolicy,
      thumbnail: product.thumbnail,
    });
  
    const result=await wishlist.save();
    resp.json(result);
}

const getWishlistProduct=async(req,resp)=>{
    const wishlistItems=await Wishlist.find();
    resp.json(wishlistItems);
}

const deleteWishlistProduct=async(req,resp)=>{
    const _id=req.params._id;
    await Wishlist.deleteOne({_id})
    .then(()=>{
        resp.json({message:"Deleted Successfully"})
    })
    .catch(()=>{
        resp.json({message:"Error Occured"});
    })

}

module.exports={insertWishlistProduct,getWishlistProduct,deleteWishlistProduct};