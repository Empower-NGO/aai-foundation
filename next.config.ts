import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/aai-foundation" : "";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : "standalone",
  basePath: basePath || undefined,
  trailingSlash: isGithubPages || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isGithubPages ? { images: { unoptimized: true } } : {}),
};

export default nextConfig;
