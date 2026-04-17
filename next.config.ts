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
  basePath,
  images: {
    unoptimized: true,
  },
  rewrites: async () => {
    return Object.keys(INVITED_FRIENDS_INFO).map((key => {
      return [
        {
        source: `/${key}/`,
        destination: `/${key}`,
        },
        {
          source: `/${key}/success/`,
          destination: `/${key}/success`,
        }
      ]
    })).flat()
  }
};

export default nextConfig;
