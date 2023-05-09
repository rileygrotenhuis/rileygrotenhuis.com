/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.modules.push(__dirname + '/posts');
    return config;
  },
};

module.exports = nextConfig;
