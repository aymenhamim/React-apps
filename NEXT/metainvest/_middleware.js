// // middleware.ts
// import { NextRequest, NextResponse } from "next/server";
// import { serverRequest } from "./shared/axios-server";
// // import type { GlobalResponse } from './shared/global-response.dto'
// // import type { User } from './entities/user'

// const authProtectedRoutes = [
//   "/admin/dashboard",
//   "/admin/products/new",
//   "/admin/products",
// ];

// export default async function middleware(req) {
//   const { pathname } = req.nextUrl;
//   const isProtectedRoute = authProtectedRoutes.some((route) =>
//     pathname.startsWith(route)
//   );
//   const isAdminRoute = pathname.startsWith("/admin");

//   // Skip middleware if not protecting any routes
//   if (!isProtectedRoute && !isAdminRoute) {
//     return NextResponse.next();
//   }

//   try {
//     // Check user authentication
//     const { data: user } =
//       (await serverRequest) <
//       GlobalResponse <
//       User >> `${process.env.BACKEND_URL}/api/user`;

//     // Handle admin routes
//     if (isAdminRoute) {
//       if (!user) {
//         return NextResponse.redirect(new URL("/", req.nextUrl));
//       }
//       if (!user.is_admin) {
//         return NextResponse.redirect(new URL("/unauthorized", req.nextUrl));
//       }
//       return NextResponse.next();
//     }

//     // Handle protected routes
//     if (isProtectedRoute) {
//       if (!user) {
//         const response = NextResponse.redirect(
//           new URL("/dashboard/vehicles", req.nextUrl)
//         );
//         response.cookies.set("show-auth-modal", "true", {
//           path: "/",
//           maxAge: 60,
//           sameSite: "lax",
//           httpOnly: false,
//         });

//         return response;
//       }
//       // User is authenticated - allow access
//       return NextResponse.next();
//     }
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   } catch (error) {
//     if (isAdminRoute) {
//       return NextResponse.redirect(new URL("/", req.nextUrl));
//     }
//     if (isProtectedRoute) {
//       const response = NextResponse.redirect(
//         new URL("/dashboard/vehicles", req.nextUrl)
//       );
//       response.cookies.set("show-auth-modal", "true", {
//         path: "/",
//         maxAge: 60,
//         sameSite: "lax",
//         httpOnly: false,
//       });
//       return response;
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/dashboard", "/admin/products/new", "/admin/products"],
// };
