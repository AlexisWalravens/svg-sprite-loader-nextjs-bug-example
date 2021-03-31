const path = require('path')

module.exports = {
  future: {
    webpack5: true
  },
  reactStrictMode: true,
  target: 'serverless',
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
  },

  webpack (config) {
    config.module.rules.push({
      test: /\.svg$/,
      include: path.join(process.cwd(), 'assets', 'icons'),
      use: [
        {
          loader: 'svg-sprite-loader',
        },
        'svgo-loader'
      ]
    })
    return config
  }
}
