// const { getDefaultConfig } = require('expo/metro-config');
// const { withNativeWind } = require('nativewind/metro');

// // eslint-disable-next-line no-undef
// const config = getDefaultConfig(__dirname);

// module.exports = withNativeWind(config, { input: './global.css' });

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind");

module.exports = withNativeWind(
  (() => {
    const config = getDefaultConfig(__dirname);
    config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== "svg");
    config.resolver.sourceExts.push("svg");
    return config;
  })(),
  { input: "./global.css" }
);

