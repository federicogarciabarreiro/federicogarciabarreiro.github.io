/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = "production"

const nextConfig = {
  basePath: isProd? "/porfolio" : "",
  output: 'export',
  reactStrictMode: true,
  distDir: 'dist'
}

module.exports = nextConfig
