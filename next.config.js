module.exports = {
  env: {
    ORIGIN: process.env.ORIGIN,
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
    deferScripts: true,
    granularChunks: true,
  },
};
