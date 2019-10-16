const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        port: 3000,
        progress: true,
        contentBase: './build'
    },
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader:'style-loader',
                        options: {
                            insertAt: "top"
                        }
                    },
                    'css-loader'
                ]
            }
        ]
    }
}
