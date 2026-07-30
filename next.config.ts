import type { NextConfig } from "next";

const repoName = "Vaidehi-Jain-Portfolio";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Generate static HTML files inside the "out" folder
  output: "export",

  // Required because GitHub Pages hosts the site under the repository name
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  // GitHub Pages cannot run Next.js image optimization
  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
};

export default nextConfig;