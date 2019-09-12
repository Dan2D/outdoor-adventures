const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTML_WEBPACK_CONFIG = new HtmlWebpackPlugin({
    template: "./public/index.html",
    filename: "index.html",
    inject: 'body'
});
const HOT_LOADER = new webpack.HotModuleReplacementPlugin();

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
        publicPath: "/",
        filename: 'bundle.js'
    },
    plugins: [HOT_LOADER, HTML_WEBPACK_CONFIG],
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 3000,
        publicPath: "localhost:3000/dist/",
        hot: true
    }
}