/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = withPWA({
   output: "export", // Outputs a Single-Page Application (SPA).
   distDir: "./dist", // Changes the build output directory to `./dist/`.
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/,
         use: ["@svgr/webpack"],
      });

      return config;
   },
   pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development',
   },
});

export default nextConfig;
