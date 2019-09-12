const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const HTML_WEBPACK_CONFIG = new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "index.html",
    inject: 'body'
});
const HOT_LOADER = new webpack.HotModuleReplacementPlugin();
const COMPRESSION_PLUGIN = new CompressionPlugin({
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|css|html|svg)$/,
    threshold: 8192,
    minRatio: 0.8
});
const BROTLI_PLUGIN = new BrotliPlugin({
    asset: '[path].br[query]',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8
});
const BUNDLE_ANALYZER = new BundleAnalyzerPlugin({
    analyzerMode: 'disabled',
    generateStatsFile: false,
    statsOptions: { source: false }
});

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
              },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader' 
            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "dist/",
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    plugins: [HOT_LOADER, HTML_WEBPACK_CONFIG, COMPRESSION_PLUGIN, BUNDLE_ANALYZER],
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        compress: true,
        port: 3000,
        publicPath: "localhost:3000/dist/",
        hot: true
    }
}