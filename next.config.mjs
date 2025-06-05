/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = withPWA({
  // output: "export", // 如需静态导出可保留，否则建议注释
  // distDir: "./dist", // 建议注释，使用默认 .next
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
    // swDest: 'service-worker.js', // 如需自定义 service worker 文件名
  },
});

export default nextConfig;
