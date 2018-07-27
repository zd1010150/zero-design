const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: path.resolve(__dirname, 'src/lib/index.js'),
    output: {
        path: path.resolve(__dirname, './build/lib'),
        filename: 'index.js',
        library: '',
        libraryTarget: 'commonjs2'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/react'],
                    plugins: [
                        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }], // `style: true` for less
                        require.resolve("babel-plugin-transform-object-rest-spread"),
                        require.resolve("babel-plugin-transform-export-extensions"),
                        require.resolve("babel-plugin-transform-class-properties")
                    ]
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};