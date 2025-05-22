"use server";
import { axiosInstance } from "@/store/slices/productsSlice";
import { headers } from "next/headers";

export async function serverRequest(url, config) {
  const incomingHeaders = await headers();

  const cookie = incomingHeaders.get("cookie") ?? "";
  const referer = process.env.FRONTEND_URL;

  const xsrfToken = extractTokenFromCookie(cookie, "XSRF-TOKEN");

  const { method = "get", params, data, customHeaders = {} } = config || {};

  const response = await axiosInstance.request({
    url,
    method,
    params,
    data,
    headers: {
      Cookie: cookie,
      Referer: referer,
      "X-XSRF-TOKEN": decodeURIComponent(xsrfToken ?? ""),
      ...customHeaders,
    },
    withCredentials: true,
  });

  return response.data;
}

function extractTokenFromCookie(cookie, tokenName) {
  const match = cookie.match(new RegExp(`${tokenName}=([^;]+)`));
  return match ? match[1] : null;
}
