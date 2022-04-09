import { Request, Response } from "express";
import mongoose from "mongoose";
import { Product } from "../models/Product";
import cloudinary from "cloudinary";
import formidable from "formidable";

const addProduct = async (req: Request, res: Response) => {
  // Create an empty array to store the links to the images after uploading to cloud
  const imageLinks: string[] = [];

  // Initialize formidable for formData parsing
  const form = new formidable.IncomingForm({
    // Preserve the file extensions i.e. .jpeg,.png
    keepExtensions: true,
    // Use this option for multiple files
    multiples: true,
  });
  // Parse the formData in the req
  form.parse(req, async (err, fields, files) => {
    if (err) throw err;

    // Do this to get formatted images, without not so necessary information
    let images = JSON.parse(JSON.stringify(files.images));

    // The files is either an object(for single file) or an array(for multiple files)
    // This causes problems in iterating, so the client sends the number of files on upload
    // Use this number to find whether there is one incoming file or multiple files
    const imagesLength: number = parseInt(<string>fields.filesLength);

    // Config cloudinary
    cloudinary.v2.config({
      cloud_name: "tradezilla",
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    if (imagesLength == 1) {
      // Initiate the file upload, and wait for it to complete
      await cloudinary.v2.uploader.upload(
        images.filepath,
        { public_id: `single/img-xx` },
        (err, result) => {
          if (err) throw err;
          // After upload completion, push the link to the uploaded image to the imageLinks array
          if (result?.secure_url) imageLinks.push(result.secure_url);
        }
      );
    } else {
      // Run a loop to upload multiple files
      for (let index = 0; index < imagesLength; index++) {
        // Upload the files one by one
        await cloudinary.v2.uploader.upload(
          images[index].filepath,
          { public_id: `multiple/img-${index}` },
          (err, result) => {
            if (err) throw err;
            // After upload completion, push the link to the uploaded image to the imageLinks array
            if (result?.secure_url) imageLinks.push(result.secure_url);
          }
        );
      }
    }
    console.log("here", imageLinks);
  });
  console.log("finally", imageLinks);
  // Connect to the atlas database
  // mongoose
  //   .connect(<string>process.env.DB_URI)
  //   .catch((e) => console.log(`error: ${e.message}`));

  return res.json({
    message: "Received",
  });
};

export default addProduct;
