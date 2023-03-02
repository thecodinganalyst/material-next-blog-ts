/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        {
          loader: "raw-loader",
        },
        {
          loader: "remark-loader",
          options: {
            // Add any remark plugins or options you want to use here
          },
        },
      ],
    });
    return config;
  },
};