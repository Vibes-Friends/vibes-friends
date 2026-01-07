import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // basePath for path-based routing when proxied from landing app
  // Set FORMS_STANDALONE=true to run without basePath (for local dev)
  basePath: process.env.FORMS_STANDALONE === "true" ? "" : "/forms",
};

export default nextConfig;
