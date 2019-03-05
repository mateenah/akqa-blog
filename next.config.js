require('dotenv').config();
module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' }
      }
    },
    modules:['@nextjs/dotenv'],
    webpack: (config, { dev }) => {
    config.plugins.push(
        new webpack.EnvironmentPlugin(process.env),
          //...
          )
          return config;
        }
  }

  