const WebpackAssetsManifest = require('webpack-assets-manifest');

/**
 * MEMO
 * - chunk 옵션 제거해 둠
 */

module.exports = {
  configureWebpack: {
    devServer: {
      headers: { 'Access-Control-Allow-Origin': '*' }
    },
    plugins: [
      new WebpackAssetsManifest({
        entrypoints: true,
        output: 'asset-manifest.json',
        customize(entry, original, manifest, asset) {
          return {
            key: `${entry.key.replace('app', 'main')}`,
            value: `/${entry.value}`
          };
        },
        transform(assets, manifest) {
          const { entrypoints, ...files } = assets;
          // asset-manifest nomalize 고려
          return {
            files,
            entrypoints
          };
        }
      })
    ]
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks');
  }
};
