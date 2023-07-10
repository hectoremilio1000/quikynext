/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
// module.exports = {
//   reactStrictMode: true,
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(woff|woff2|eot|ttf|otf)$/,
//       use: {
//         loader: "file-loader",
//         options: {
//           publicPath: "/_next",
//           outputPath: "static/fonts",
//           name: "[name].[ext]",
//         },
//       },
//     });

//     return config;
//   },
// };
