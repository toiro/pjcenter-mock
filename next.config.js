const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const transpileModules = require('next-transpile-modules')(['imagemin-svgo'])

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, module: false, path: false }
    return config
  },
  eslint: {
    // ESLint managed on the workspace level
    ignoreDuringBuilds: true,
  },
  images: {
    disableStaticImages: true,
  },
}

const config = withPlugins(
  [
    [
      optimizedImages,
      {
        // optimisation disabled by default, to enable check https://github.com/cyrilwanner/next-optimized-images
        optimizeImages: true,
        handleImages: ['svg'],
      },
    ],
    transpileModules,
  ],
  nextConfig
)

module.exports = config
