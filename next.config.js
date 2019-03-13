require('dotenv').config();

const webpack = require('webpack');
const withCSS = require('@zeit/next-css');

module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' }
      }
    },
   
 withCSS:(config, options) =>{
 
    return config
  
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

  