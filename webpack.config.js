const path = require('path')

module.exports = {
    entry: './src/index.ts',

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.ts$/,
            enforce: 'pre',
            use: [{
                loader: 'tslint-loader',
            }]
        }, {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.(less|css)$/,
            use: [{
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'less-loader',
                },
            ],
        }, ],
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    }
}