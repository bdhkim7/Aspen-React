import type { NextConfig } from "next";
import { htmlRedirects } from "./src/data/redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return htmlRedirects.map(({ source, destination }) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default nextConfig;
