/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.modules.push(__dirname + '/posts')
    }
    return config
  }
};

module.exports = nextConfig;
