// app/api/delete-images/route.js (Note: plural "images")
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request) {
  try {
    const { publicIds } = await request.json();

    if (!publicIds || !Array.isArray(publicIds)) {
      return NextResponse.json(
        { error: "publicIds array is required" },
        { status: 400 }
      );
    }

    // Filter out any null/undefined values
    const validPublicIds = publicIds.filter((id) => id && id.trim() !== "");

    if (validPublicIds.length === 0) {
      return NextResponse.json(
        { error: "No valid public IDs provided" },
        { status: 400 }
      );
    }

    // Delete all images in parallel
    const deletePromises = validPublicIds.map((publicId) =>
      cloudinary.uploader.destroy(publicId)
    );

    const results = await Promise.all(deletePromises);

    return NextResponse.json({
      success: true,
      results: results.map((result, index) => ({
        publicId: validPublicIds[index],
        status: result.result, // 'ok' or 'not found'
      })),
    });
  } catch (error) {
    console.error("Delete multiple images error:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
