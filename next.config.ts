import type { NextConfig } from "next";

const repoName = "pgta-knowledge"; // repository name
const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,
  // other Next.js options can be added here
};

export default nextConfig;
