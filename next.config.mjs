/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages base path — set to repo name for project sites
  // basePath: '/deepmaterials.github.io',
  // assetPrefix: '/deepmaterials.github.io/',

  // Custom domain — uncomment when CNAME is configured
  // basePath: '',
  // assetPrefix: '',

  trailingSlash: true,
};

export default nextConfig;
