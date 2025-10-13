// "use server";
// import { headers } from "next/headers";
// import api from "./axios";

// export async function serverRequest<T = undefined>(
//   url: string,
//   config?: {
//     method?: "get" | "post" | "put" | "delete" | "patch";
//     params?: Record<string, unknown>;
//     data?: unknown;
//     customHeaders?: Record<string, unknown>;
//   }
// ): Promise<T> {
//   const incomingHeaders = await headers();

//   const cookie = incomingHeaders.get("cookie") ?? "";
//   const referer = process.env.FRONTEND_URL;

//   const xsrfToken = extractTokenFromCookie(cookie, "XSRF-TOKEN");

//   const { method = "get", params, data, customHeaders = {} } = config || {};

//   const response = await api.request<T>({
//     url,
//     method,
//     params,
//     data,
//     headers: {
//       Cookie: cookie,
//       Referer: referer,
//       "X-XSRF-TOKEN": decodeURIComponent(xsrfToken ?? ""),
//       ...customHeaders,
//     },
//     withCredentials: true,
//   });

//   return response.data;
// }

// function extractTokenFromCookie(
//   cookie: string,
//   tokenName: string
// ): string | null {
//   const match = cookie.match(new RegExp(`${tokenName}=([^;]+)`));
//   return match ? match[1] : null;
// }
