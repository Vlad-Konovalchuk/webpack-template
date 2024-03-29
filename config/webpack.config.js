const webpackMerge = require('webpack-merge');

const commonConfig = require('./webpack.common');

const getAddons = addonsArgs => {
  const addons = Array.isArray(addonsArgs)
    ? addonsArgs
    : [addonsArgs];
  return addons
    .filter(Boolean)
    .map(name => require(`./addons/webpack.${name}.js`));
};

module.exports = ({env, addon}) => {
  const envConfig = require(`./webpack.${env}.config.js`);
  return webpackMerge(commonConfig, envConfig, ...getAddons(addon));
};
