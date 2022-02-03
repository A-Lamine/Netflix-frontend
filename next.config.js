module.exports = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    PUBLISH_KEY: process.env.PUBLISH_KEY
  },
  images: {
    domains: ['static.netflix.com'],
  }
}