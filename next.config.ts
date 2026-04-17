import type { NextConfig } from "next";
import { INVITED_FRIENDS_INFO } from "./shared/constants";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const toBasePath = (value: string): string => {
  if (!value || value === "/") {
    return "";
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    try {
      const pathname = new URL(value).pathname;
      return pathname === "/" ? "" : pathname.replace(/\/$/, "");
    } catch {
      return "";
    }
  }

  return value.replace(/\/$/, "");
};

const basePath = toBasePath(rawBasePath);

const nextConfig: NextConfig = {
  reactStrictMode: false,
  output: "export",
  // GitHub Pages resolves `/slug/` to `slug/index.html`. Without this, only
  // `slug.html` exists and trailing-slash URLs 404.
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
