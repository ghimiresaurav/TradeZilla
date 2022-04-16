import mongoose from "mongoose";

const checkValidObjectId = (id: string) => {
  // Make sure the length of the id is 24
  if (id.length === 24) {
    // Check if the id is valid
    if (mongoose.isValidObjectId(id)) {
      console.log("here");
      // Invalid object ids change when converted to ObjectId at different times
      // But valid object ids do not change regardless of the times
      // So create an objectId using the value from the parameter
      const objectIdFromParam = new mongoose.Types.ObjectId(id);

      // Check if the parameter is the same as the objectId that was just created
      // It has to be converted to string first, otherwise it will always return false
      if (objectIdFromParam.toString() === id) return true;
    }
  }

  return false;
};

export default checkValidObjectId;
