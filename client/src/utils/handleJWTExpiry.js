const handleJWTExpiry = (response) => {
  // If the server sent a successful response, do nothing
  if (response.success) return;

  // If the server sent a message saying jwt has expired
  if (response.message == "jwt expired") {
    // show a message saying session expired, please login again
    localStorage.clear();
  }
};

export default handleJWTExpiry;
