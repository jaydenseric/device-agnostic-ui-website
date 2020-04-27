module.exports = {
  env: {
    ORIGIN: process.env.ORIGIN || `https://${process.env.VERCEL_URL}`,
  },
  webpack(config, { isServer }) {
    if (!isServer)
      config.optimization.splitChunks.cacheGroups['device-agnostic-ui'] = {
        name: 'device-agnostic-ui',
        test: /[\\/]node_modules[\\/]device-agnostic-ui[\\/]/,
        reuseExistingChunk: true,
        priority: 50,
      };

    return config;
  },
  experimental: {
    granularChunks: true,
  },
};
