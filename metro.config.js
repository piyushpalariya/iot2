const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

const { withNativeWind } = require("nativewind/metro");

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

const SvgConfig = {
  transformer: {
    babelTransformerPath: require.resolve(
      "react-native-svg-transformer/react-native",
    ),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
  },
};

const OldConfig = mergeConfig(defaultConfig, SvgConfig);

const config = wrapWithReanimatedMetroConfig(OldConfig);

module.exports = withNativeWind(config, { input: "./global.css" });
