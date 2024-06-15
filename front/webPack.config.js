const path = require('path');

module.exports = {
    mode: 'development', // O 'production' dependiendo de tus necesidades
    entry: {
        index: './scripts/index.js',
        form: './scripts/form.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};








/*
module.exports = {
    entry: "./scripts/index.js",

    output: {
        path: __dirname + "/public",
        filename: "bungle.js"
    }

}*/