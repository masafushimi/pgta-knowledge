import type { NextConfig } from "next";

const repoName = "pgta-knowledge"; // repository name
const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,
  // Add any additional Next.js config here
};

export default nextConfig;
