require('dotenv').config();

const webpack = require('webpack');

module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' }
      }
    },

    
    webpack: (config, { dev }) => {
    config.plugins.push(
        new webpack.EnvironmentPlugin(process.env),
          //...
          )
          return config;
        },

    createClient: ({ space, accessToken, host }) =>
      contentful.createClient({
        space,
        accessToken,
        host
      })
  }

  