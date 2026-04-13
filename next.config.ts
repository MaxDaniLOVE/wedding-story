import type { NextConfig } from "next";

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
  output: "export",
  trailingSlash: false,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
