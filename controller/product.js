const Product = require("../models/product");

const getProducts = async (req, resp) => {
  try {
    const products = await Product.find();

    resp.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    resp.status(500).json({ error: "Failed to fetch products" });
  }
};

const getProductsByCategory = async (req, resp) => {
  const category = req.params.category;
  const products = await Product.find({ category });
  resp.json(products);
};

const getProductsById = async (req, resp) => {
  const _id = req.params._id;
  const products = await Product.find({ _id });

  resp.json(products);
};

const insertProduct = async (req, resp) => {
  const formattedProduct = req.body;
  const newProduct = new Product(formattedProduct);
  console.log(formattedProduct);
  await newProduct
    .save()
    .then(() => {
      resp.json({ message: "Product added successfully" });
    })
    .catch(() => {
      resp.status(500).json({ error: "Failed to add product" });
    });
};

module.exports = {
  getProducts,
  getProductsByCategory,
  getProductsById,
  insertProduct,
};
