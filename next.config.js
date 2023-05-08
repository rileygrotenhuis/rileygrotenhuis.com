/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    webpack: (config, { isServer }) => {
      if (isServer) {
        config.resolve.modules.push(__dirname + '/posts')
      }
      return config
    },
  },
};

module.exports = nextConfig;
