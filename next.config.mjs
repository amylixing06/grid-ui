/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = {
  // output: "export", // 如需静态导出可保留，否则建议注释
  // distDir: "./dist", // 建议注释，使用默认 .next
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    // swDest: 'service-worker.js', // 如需自定义 service worker 文件名
  },
};

export default withPWA(nextConfig);
