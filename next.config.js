const { DefinePlugin } = require("webpack");
const i18n = require("./next-i18next.config");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      unoptimized: true,
    },
    largePageDataBytes: 600 * 1000,
  },
  compress: true,
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  // Bad but to test rapidly.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    // eslint-disable-next-line no-param-reassign
    config.plugins = config.plugins || [];
    config.plugins.push(
      new DefinePlugin({
        salut: 2,
      })
    );
    // config.plugins.push(new DefinePlugin(env));
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
