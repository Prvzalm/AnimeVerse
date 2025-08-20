const { withSentryConfig } = require('@sentry/nextjs');

const moduleExports = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // Add your image domains here
  },
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ];
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  },
};

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
};

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);