/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sadakatcdn.cyparta.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  /**
   * Modifies the webpack configuration to support SVG files as react component.
   *
   * @param {object} config - The webpack configuration object.
   * @return {object} The modified webpack configuration object.
   */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.tsx",
        },
      },
    },
  },
};

export default nextConfig;
