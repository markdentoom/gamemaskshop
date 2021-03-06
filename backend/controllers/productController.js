import Product from "../models/productModel.js"
import asyncHandler from "express-async-handler"

// @desc      Fetch all products
// @route     GET /api/products
// @acccess   Public
export const getProducts = asyncHandler(async (req, res) => {
  // asyncHandler slaps a try/catch around the function it contains
  const products = await Product.find({}) // Empty dict gets all products
  // throw new Error("Test error message")
  res.json(products)
})

// @desc      Fetch single product
// @route     GET /api/products/:id
// @acccess   Public
export const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    // Throw when the id has a good format, but the id does not exist in the db
    throw new Error("Product not found") // Error is 404 by default
  }
})
