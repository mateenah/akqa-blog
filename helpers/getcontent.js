import { createClient as client } from 'contentful';
//const contentful = require('contentful');

const defaultConfig = {
  CTF_SPACE_ID: process.env.CTF_SPACE_ID,
  CTF_ENV_ID: process.env.CTF_ENV_ID,
  CTF_CDA_TOKEN: process.env.CTF_CDA_TOKEN,
  CTF_CPA_TOKEN: process.env.CTF_CPA_TOKEN
};

export const createClient = (config = defaultConfig) => {
    const options = {
      host: 'preview.contentful.com',
      space: config.CTF_SPACE_ID,
      environment: config.CTF_ENV_ID,
      accessToken: config.CTF_CPA_TOKEN
    };

    if(process.env.NODE_ENV === 'production' && !process.env.STAGING) {
      options.host = 'cdn.contentful.com';
      options.accessToken = config.CTF_CDA_TOKEN;
    }
    console.log(options)
    return client(options);
  }


export default {
  createClient
}

