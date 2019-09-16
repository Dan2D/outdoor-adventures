const path = require('path');
const common = require("./webpack.common");
const merge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ImageMinWebpackPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');
const MiniCSSWebpackPlugin = require('mini-css-extract-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

  const IMAGE_MIN_PLUGIN = new ImageMinWebpackPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      pngquant: ({quality: 65}),
      plugins: [imageminMozjpeg({quality: 65})]
  });
  const MINI_CSS_PLUGIN = new MiniCSSWebpackPlugin({
      filename: '[name].[contenthash].css'
  })
const BROTLI_PLUGIN = new BrotliPlugin({
    asset: '[path].br[query]',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8
});
const BUNDLE_ANALYZER = new BundleAnalyzerPlugin({
    analyzerMode: 'disable',
    generateStatsFile: true,
    statsOptions: { source: false }
});

module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: 'main.[contenthash].bundle.js',
        chunkFilename: '[name].[contenthash].bundle.js'
    },
    plugins: [new CleanWebpackPlugin(), MINI_CSS_PLUGIN ,BROTLI_PLUGIN, IMAGE_MIN_PLUGIN, BUNDLE_ANALYZER],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [MiniCSSWebpackPlugin.loader, 'css-loader', 'sass-loader']
            },
        ]
    },
});
