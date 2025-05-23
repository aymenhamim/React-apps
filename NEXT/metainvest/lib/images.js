function extractCloudinaryInfo(imageUrl) {
  // Regex to match Cloudinary URL pattern
  const regex =
    /https:\/\/res\.cloudinary\.com\/([^\/]+)\/image\/upload\/(?:v\d+\/)?([^\/]+)(?:\.[^.]+)?$/;
  const match = imageUrl.match(regex);

  if (match) {
    return {
      cloudName: match[1],
      publicId: match[2].split(".")[0], // Remove file extension
      fullUrl: imageUrl,
    };
  }

  throw new Error("Invalid Cloudinary URL format");
}

export async function deleteImageFromUrl(imageUrl, apiKey, apiSecret) {
  try {
    // Extract info from URL
    const { cloudName, publicId } = extractCloudinaryInfo(imageUrl);

    console.log("Extracted info:");
    console.log("Cloud Name:", cloudName);
    console.log("Public ID:", publicId);
    console.log("Api_secret_key", apiSecret);

    // Generate timestamp and signature
    const timestamp = Math.round(Date.now() / 1000);
    const crypto = require("crypto");
    const stringToSign = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
    const signature = crypto
      .createHash("sha1")
      .update(stringToSign)
      .digest("hex");

    // Prepare form data
    const formData = new FormData();
    formData.append("public_id", publicId);
    formData.append("timestamp", timestamp);
    formData.append("api_key", apiKey);
    formData.append("signature", signature);

    // Make delete request
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`,
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    if (result.result === "ok") {
      console.log("✅ Image deleted successfully!");
      return { success: true, data: result };
    } else {
      console.log("❌ Failed to delete image:", result);
      return { success: false, error: result };
    }
  } catch (error) {
    console.error("Error:", error);
    return { success: false, error: error.message };
  }
}
