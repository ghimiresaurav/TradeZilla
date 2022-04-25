import { Request, Response } from "express";
import { Product } from "../models/Product";
import mongoose from "mongoose";

const getOwnProducts = async (req: Request, res: Response) => {
  // Connect to the atlas database
  mongoose
    .connect(<string>process.env.DB_URI)
    .catch((e) => console.log(`Error: ${e.message}`));

  // Get the product
  const products = await Product.find({ vendor: res.locals.id });

  // Send false message if product not found
  if (!products)
    return res.json({
      success: false,
      message: "Product not found",
    });

  // const image = products[0].images.split(", ")[0];
  // products.images = image;

  const productX = products.map((product) => {
    return {
      ...product,
      image: product.images.split(", ")[0],
    };
  });

  console.log(productX);

  return res.json({ success: true, products: productX });
};

export default getOwnProducts;
