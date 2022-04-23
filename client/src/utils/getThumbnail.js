// This function takes a url link of the image in the cloud and returns a url pointing to the image of reduced size
const getThumbnailFromImage = (link) => {
  // Split the given link using a regex, the regex matches a "v" followed by 0 or more numbers
  const arr = link.split(/v[0-9]+/);
  // Join the splitted parts with a "q_40"
  // What this does is, it reduces the image size and quality too
  // Reduced image size means faster image loading
  const thumbnail = arr.join("q_40");
  return thumbnail;
};

export default getThumbnailFromImage;
