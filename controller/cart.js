const Product =require('../models/product');
const Cart=require('../models/cart')

const insertCartProduct= async (req, resp) => {
    const _id = req.body._id;
    const product = await Product.findById(_id);
  
    const cartItems = new Cart({
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
    const data = await cartItems.save();
  
    resp.json(data);
}

const getCartProducts=async (req, resp) => {
    await Cart.find({})
      .then((data) => {
        resp.json(data);
      })
      .catch(() => {
        resp.status(500).json({ error: "Failed to fetch cart" });
      });
}

const deleteCartProduct= async (req, resp) => {
    const _id = req.params._id;
    await Cart.deleteOne({ _id })
      .then(() => {
        resp.json({ message: "Item removed from cart" });
      })
      .catch(() => {
        resp.status(500).json({ error: "Failed to remove item from cart" });
      });
}

module.exports={insertCartProduct,getCartProducts,deleteCartProduct};