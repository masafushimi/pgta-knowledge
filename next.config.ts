import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // **必ず追加**：静的サイトとしてエクスポートする指示
  output: "export",

  // 必要に応じて以下を有効化（例：リポジトリ名がパスになる場合）
  // basePath: "/pgta-knowledge",
};

export default nextConfig;
