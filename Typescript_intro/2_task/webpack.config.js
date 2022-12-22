const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        port: 3000
    }
};