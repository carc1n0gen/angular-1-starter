const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "dist/css/bundle.css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './src/js/index.js',
        output: {
        filename: 'dist/js/bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        extractSass
    ]
}