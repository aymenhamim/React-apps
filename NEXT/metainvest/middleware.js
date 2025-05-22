import { NextResponse } from "next/server";
// import { axiosInstance } from "./store/slices/productsSlice";
import { serverRequest } from "./lib/axios-server";

const authProtectedRoutes = [
  "/admin/dashboard",
  "/admin/products/new",
  "/admin/products",
];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  const isProtectedRoute = authProtectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  try {
    const user = await serverRequest(`${process.env.BACKEND_URL}user`);

    if (user) {
      return NextResponse.next();
    } else {
      // User data is empty/invalid
      return NextResponse.redirect(new URL("/", request.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url)); // or "/" for home
  }
}

export const config = {
  matcher: "/admin/:path*",
};
