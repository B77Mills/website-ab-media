const configureNativeX = require('@ab-media/package-global/config/native-x');

const config = configureNativeX();

config.enabled = false;

// config
//   .setAliasPlacements('default', [
//     { name: 'default', id: '6000b672140b3d0001040608' },
//   ]);

module.exports = config;
